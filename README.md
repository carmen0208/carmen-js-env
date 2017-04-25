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
