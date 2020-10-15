# Huhi Browser


## Overview

This repository holds the build tools needed to build the huhi desktop browser for macOS, Windows, and Linux.  In particular, it fetches and syncs code from the projects we define in `package.json` and `src/huhi/DEPS`:

  - [Chromium](https://chromium.googlesource.com/chromium/src.git)
    - Fetches code via `depot_tools`.
    - sets the branch for Chromium (ex: 65.0.3325.181).
  - [huhi-core](https://github.com/huhisoft/huhi-core)
    - Mounted at `src/huhi`.
    - Maintains patches for 3rd party Chromium code.
  - [adblock-rust](https://github.com/huhisoft/adblock-rust)
    - Implements Huhi's ad-block engine.
    - Linked through [huhi/adblock-rust-ffi](https://github.com/huhisoft/adblock-rust-ffi)

## Downloads

You can [visit our website](https://huhisoft.com/download) to get the latest stable release.

## Other repositories

For other versions of our browser, please see:

* iOS - [huhi/huhi-ios](https://github.com/huhisoft/huhi-ios)

## Contributing

Please see the [contributing guidelines](./CONTRIBUTING.md)

## Community

[Join the Q&A community](https://community.huhisoft.com/) if you'd like to get more involved with Huhi. You can [ask for help](https://community.huhisoft.com/c/support-and-troubleshooting),
[discuss features you'd like to see](https://community.huhisoft.com/c/huhi-feature-requests), and a lot more. We'd love to have your help so that we can continue improving Huhi.


Follow [@HuhiBrowser](https://twitter.com/HuhiBrowser) on Twitter for important news and announcements.

## Install prerequisites

Follow the instructions for your platform:

- [macOS](https://github.com/huhisoft/huhi-browser/wiki/macOS-Development-Environment)
- [Windows](https://github.com/huhisoft/huhi-browser/wiki/Windows-Development-Environment)
- [Linux/Android](https://github.com/huhisoft/huhi-browser/wiki/Linux-Development-Environment)

## Clone and initialize the repo

Once you have the prerequisites installed, you can get the code and initialize the build environment.

```bash
git clone git@github.com:huhisoft/huhi-browser.git
cd huhi-browser
npm install

# this takes 30-45 minutes to run
# the Chromium source is downloaded which has a large history
npm run init
```
huhi-core based android builds should use `npm run init -- --target_os=android --target_arch=arm` (or whatever cpu type you want to build for)

You can also set the target_os and target_arch for init and build using

```
npm config set target_os android
npm config set target_arch arm
```

## Build Huhi
The default build type is component.

```
# start the component build compile
npm run build
```

To do a release build:

```
# start the release compile
npm run build Release
```

huhi-core based android builds should use `npm run build -- --target_os=android --target_arch=arm` or set the npm config variables as specified above for `init`

### Build Configurations

Running a release build with `npm run build Release` can be very slow and use a lot of RAM especially on Linux with the Gold LLVM plugin.

To run a statically linked build (takes longer to build, but starts faster)

```bash
npm run build -- Static
```

To run a debug build (Component build with is_debug=true)

```bash
npm run build -- Debug
```

You may also want to try [[using sccache|sccache-for-faster-builds]].

## Run Huhi
To start the build:

`npm start [Release|Component|Static|Debug]`

# Update Huhi

`npm run sync -- [--force] [--init] [--create] [huhi_core_ref]`

**This will attempt to stash your local changes in huhi-core, but it's safer to commit local changes before running this**

`npm run sync` will (depending on the below flags):

1. 📥 Update sub-projects (chromium, huhi-core) to latest commit of a git ref (e.g. tag or branch)
2. 🤕 Apply patches
3. 🔄 Update gclient DEPS dependencies
4. ⏩ Run hooks (e.g. to perform `npm install` on child projects)

| flag | Description |
|---|---|
|`[no flags]`|updates chromium if needed and re-applies patches. If the chromium version did not change it will only re-apply patches that have changed. Will update child dependencies **only if any project needed updating during this script run** <br> **Use this if you want the script to manage keeping you up to date instead of pulling or switching branch manually. **|
|`--create`|when used with `huhi_core_ref` it will create a branch if one does not already exist|
|`--force`|updates both _Chromium_ and _huhi-core_ to the latest remote commit for the current huhi-core branch and the _Chromium_ ref specified in huhi-browser/package.json (e.g. `master` or `74.0.0.103`). Will re-apply all patches. Will force update all child dependencies <br> **Use this if you're having trouble and want to force the branches back to a known state. **|
|`--init`|force update both _Chromium_ and _huhi-core_ to the versions specified in huhi-browser/package.json and force updates all dependent repos - same as `npm run init`|


Run `npm run sync huhi_core_ref` to checkout the specified _huhi-core_ ref and update all dependent repos including chromium if needed

### Scenarios

#### Create a new branch
```bash
huhi-core> git checkout -b branch_name
```

or

```bash
huhi-browser> npm run sync -- --create branch_name
```

### Checkout an existing branch or tag
```bash
huhi-core> git fetch origin
huhi-core> git checkout [-b] branch_name
huhi-core> npm run sync
...Updating 2 patches...
...Updating child dependencies...
...Running hooks...
```

or

```bash
huhi-browser> npm run sync --create branch_name
...Updating 2 patches...
...Updating child dependencies...
...Running hooks...
```

### Update the current branch to latest remote
```bash
huhi-core> git pull
huhi-core> npm run sync
...Updating 2 patches...
...Updating child dependencies...
...Running hooks...
```

#### Reset to latest huhi-browser master, huhi-core master and chromium
```bash
huhi-browser> git checkout master
huhi-browser> git pull
huhi-browser> npm run sync -- --init
```

#### When you know that DEPS didn't change, but .patch files did (quickest)
```bash
huhi-core> git checkout featureB
huhi-core> git pull
huhi-browser> npm run apply_patches
...Applying 2 patches...
```

# Enabling third-party APIs:

1. **Google Safe Browsing**: Get an API key with SafeBrowsing API enabled from https://console.developers.google.com/. Update the `GOOGLE_API_KEY` environment variable with your key as per https://www.chromium.org/developers/how-tos/api-keys to enable Google SafeBrowsing.

# Troubleshooting

See [Troubleshooting](https://github.com/huhisoft/huhi-browser/wiki/Troubleshooting) for solutions to common problems.