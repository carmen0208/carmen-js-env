# carmen-js-env

### Editor Config

using .editconfig to config and unify the editor

http://editorconfig.org/#overview

### Package Manager

* bower
* npm
* jspm

### Check Security vulnerabilities of dependencies

```sh
npm install -g nsp
nsp check
#(+) No known vulnerabilities found
```

### Development WebServer(Not for Production)

* http-server
* live-server
* Express(if there's any BE with other language, it might be overkill)
  * Comprehensive
  * Highly configurable
  * Production grade
  * Can run it everywhere
  * comptitor (koa, hapi)
* budo
* webpack - webpack dev server
  * Servers from memory
  * Includes hot reloading
* Browsersync
  * Dedicated IP for sharing work on LAN
  * ALL interactions remain in sync
  * Great for cross-device testing

##### open Express

folder: buildScripts/srcServer.js

```sh
node buildScripts/srcServer.js
```
## Sharing work in progress

* localtunnel (Easiest setup, Ultra-versatile)
* ngrok (Easy setup, Secure)
* now (No firewall hole, hosing persists)
* Surge (No firewall hole, hosing persists)

```sh
npm install localtunnel -g
lt --port 300
lt --port 300 --subdomain carmen
```

* extra: maybe Browsersyn + localtunnel

## Automation

* Grunt
  * The 'original'
  * Configuration over code
  * Writes intermediary files between steps
  * Large plugin ecosystem
* Gulp
  * In-memory streams(pipes)
  * Fast
  * Code over configuration
  * Large plugin ecosystem
* npm Scripts
  * Declared in package.json
  * Leverage your OS'commandline
  * Directly use mpn package
  * Call separate Node Scripts
  * Convention-based pre/host hooks
  * Leverage world's largest package manager

####NPM Scripts

package.json
```javascipt
"scripts": {
  "start": "node buildScripts/srcServer.js"
},
```

```sh
npm start
npm run security-check
```
