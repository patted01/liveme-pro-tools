const proc = require("child_process").spawn;
const fetch = require("node-fetch");
const path = require("path");
const { exec } = require("child_process");
const os = require("os");
const fs = require("fs");
const EventEmitter = require('events');

const PORT = 5050;
const HOST = "http://localhost:" + PORT

const LogEmitter = new EventEmitter();

LogEmitter.on('event', (x) => {
    console.log('FROM Core:' + x);
});



async function healthCheck(){
    try {
        var res = await fetch(HOST + "/api/healthcheck");
        apiIsRunning = res.status == 200;
        return apiIsRunning;
    } catch (e) {
        return false;
    }
}

async function shutdown(){
    var res = await fetch(HOST + "/api/command/shutdown", {method:"POST"});
    
}

async function startApi() {
    console.log("Checking LMPT Core");

    var apiIsRunning = false;

    try {
        var res = await fetch(HOST + "/api/healthcheck");
        apiIsRunning = res.status == 200;
    } catch (e) {
        // backend is not running, so we keep apiIsRunning = false
    }

    if (apiIsRunning) {
        console.log("LMPT Core is running on 5050");
        return "was running already";
    }

    try {
        switch (os.platform()) {
            case "darwin": // macOS
                apipath = path.join(__dirname, "..//core//bin//dist//osx//LMPT.core");
                break;
            case "linux": // linux
                apipath = path.join(__dirname, "..//core//bin//dist//linux//LMPT.core");
                break;
            default: // windows
                var apipath = path.join(__dirname, "..\\core\\bin\\dist\\win\\LMPT.core.exe");
                break;
        }
        //  run server    
        apiProcess = proc(apipath);
        apiProcess.stderr.on("data", data => {
            //console.log(`stderr: ${data}`);
        });


        return new Promise(function(resolve, reject) {
            apiProcess.stdout.on("data", data => {
                LogEmitter.emit('event', data);
                const expectedOutput = `Now listening on: http://localhost:${PORT}`      
                // not sure if there is a better way.
                if (data.toString().includes(expectedOutput)) {
                    resolve("Successfully started background process.");
                }
            });
        });
    } catch (e) {
        return Promise.reject("Failed starting lmpt core");
    }
}

exports.start = startApi;
exports.healthCheck = healthCheck;
exports.shutdown = shutdown;
exports.LogEmitter = LogEmitter;
