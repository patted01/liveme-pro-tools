# LiveMe Pro Tools

**A big thank you to all those who are now contributing to help make this tool even better!**

### Support/Assistance/Reporting Issues
I've re-enabled the Issue Tracker here.  Please use it **ONLY** to report bugs or feature requests.

For help in general use and general questions, please use the [Discord chat room](https://discord.gg/A5p2aF4).  There are now many on there who provide help and also work on this now.

**I DO NOT RESPOND TO EMAILS EITHER ASKING FOR ASSISTANCE!**  This is my spare-time project so use the Discord chat room as others will assist as they can.

### What Is LiveMe Pro Tools?
Its an [Electron](https://electronjs.org) based application for Live.me Social Video network for:
- Search and browse user accounts
- View public replays for user accounts
- See and navigate user's followers and followings
- Watch and download replays
- Allows downloading of replays using FFMPEG
- Supports [LAMD](https://notabug.org/thecoder75/lamd)

### Prebuilt Releases
**Releases will now be built by TheCoder and added as updates warrant them.

**Planned Supported Platforms:**
- Ubuntu-based Linux and Debian Distributions (32 and 64-bit)
- macOS v10.11 or higher (64-bit only!)
- Windows 7 or higher (32 and 64-bit!)

### What about FFMPEG?
Unfortunately at this time, every way I've looked at removing it has caused major breakage in the ability to download non-broken replays.

### A Desktop Version?
A long time ago, TheCoder wanted to release an actual desktop app that wasn't built using NodeJS and ElectronJS.  This was being researched and planned but due to him getting a promotion at work, his available time for this project disappeared.  Now with what little time he has, he will try to maintain and perform minor updates as he is able to.

### Current Releases Built With
* [Electron](http://electron.atom.io)
* [NodeJS](http://nodejs.org)
* LiveMe-API - *now integrated into the project*

### Contributing
If you find any bugs or would like to help add features or additional functions, please create a pull request for review and I'll add them if they don't break anything.

### Contributing - Getting Started
#### Prerequisits
- NodeJS (verify correct installation by typing `node --version` in your console)
- Dotnet core SDK (verify correct installation by typing `dotnet --version` in your console)

#### Tools
- IDE: We provide a `.vscode/launch.json` file which contains launch commands for debugging the electron main process or the dotnet core backend. So if your don't have any better tools, just download and use VSCode.
- If using Vscode, you probably should also install the C# extension available.
- For testing out the dotnet core REST API, Postman is a good free tool to do so.

#### Install / Run
Run in the root directory
```
npm install 
```

##### Run without debugger
1. Starting backend:
```
npm run start-core 
```
or if you want that the backend restart if file changes are detected, instead run:
```
npm run watch-core 
```
> The background process is called: LMPT.Core (only if you run a released app). The localhost port will be 5050.

2. Run the electron frontend:
```
npm run start
```

##### Run with debugger
 Use the debugger from VSCode and choose in the dropdown if you want to debug the electron or the dotnet core app.

#### Create releases
For creating a release for all supported plattfroms run:
```
npm run release
```
Their are also npm scripts for only creating a release for one specific platfrom







### Contributors
* [thecoder75](https://notabug.com/thecoder75)
* [zp](https://github.com/zp)
* [polydragon](https://github.com/polydragon)
* [lewdninja](https://github.com/lewdninja)
* [Tashiketh](https://notabug.org/Tashiketh)
* [monstergarden](https://notabug.org/monstergarden)

### License
This project is licensed under the GPL-3 License - see the [LICENSE](LICENSE) file for details

