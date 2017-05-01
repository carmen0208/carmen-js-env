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

****
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

****
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

#### NPM Scripts

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

### Transpile? -Babel

* Babel
  * Modern, standards-based JS, today
  * Write standardized JS
  * Leverage full JS Ecosystem
  * Use experimental feature earlier
  * No type defs, annotations requires
  * ES6 imports are statically analyzable
* TypeScript
  * Superset of Javascript
  * Enhanced autocomplete
  * Additional non-standard feature
* Elm
  * compile down to JS
  * Clean Syntax
  * Immutable data structures
  * Friendly errors
  * All-errors are compile-time errors
  * Interops with JS

#### Babel Configuration Sytle


* .babelrc
  * not npm specific
  * easier to read since isolated
* package.json

##### Transpile for you environment

Preset | Approach
---|---
babel-preset-es2015-node| Version Detection
bable-preset-latest-minimal| Feature Detection


##### Setup Babel

****
## Bundling

##### Module Formats


* Global(verybad)(past)
```javascript
myGlobal;
```
* IIFE(past)
```javascript
(function() {
  //my code here
})();
```
* Asynchronous Module Definition (AMD)(past)
```javascript
define(['jq'], function(jq) {});
```
* CommonJS(CJS)
```javascript
var jquery = require('jquery');
```
* Universal Module Definition(UMD)

* ES6 Modules
```javascript
import jQuery from 'jquery';
```

#### Choose a Bundler

* RequireJS(AMD)（past)
* Browserify(Simple)
  * The first bundler to reach mass adoption
  * Bundle npm package for the web
  * Large plugin ecosystem
* webpack(Comprehensive)
  * Bundles more than just JS
  * Import CSS, images, etc like JS
  * Built in hot-reloading web server
* Rollup(Tree-shaking, performance)
  * Tree shaking
  * Faster loading Production code
* JSPM(runtime loader, package manager)
  * Uses SystemJS, a universal module loader
  * Can load module at runtime
  * Has its own package Manager

##### Webpack(demo)

****
## Linter

### Why Linter

* Enforce Consistency
  * Curly brace position
  * confirm / alert
  * Trailing commas
  * Globals
  * eval
* Avoid Mistakes
  * Extra parenthesis
  * Overwriting function
  * Assignment in conditional
  * Missing default case in swith
  * debugger /console.log

#### Pick a Linter
* JSLinter
* JSHint
* ESLint(facto standard)

## Configuring ESLint
* config Formats
* Which built-in rules
* warning or errors
* Which plugins
  * [[Awesome ESLine|https://github.com/dustinspecker/awesome-eslint]]
* Use preset instead

### Watching files with ESLint
* eslint-loader(webpack)
* eslint-watch
  * ESLint wrapper that adds file watch
  * Not tied to webpack
  * Better warning / error formatting
  * Display clean message
  * Easily lint tests and build scripts too

### Babel-eslint

#### demo
* Setup ESLint
  * bit.ly/jsdeveslint

```sh
npm run lint:watch
npm start
```

## Testing and Continuous Integration
* Testing Framwork(Mocha)
* Assertion Library(Chai)
* Helper Libraries: JSDOM
* Where to run test? (Node)
  * Browser
    * Karma, Testem
  * Headless Browser  
    * PhantomJS
  * In-memory DOM
    * JSDOM
* Where should I put my test?
  * Centralized
  * Alongside
* When to run test
  * Upon save

## Continuous Integration

* [[Travis CI|https://travis-ci.org/carmen0208/carmen-js-env/settings]]

****
## HTTP Calls
* Making HTTP Calls
* Mocking HTTP Calls
  * Why mock？
  * Mocking Approaches
  * Generate mock data and mock API

#### HTTP Call Approaches
* Node
  * http
  * request
* Browser
  * XMLHttpRequest
  * JQuery
  * Framework-based
  * Fetch
* Node & Browser
  * isomorphic-fetch
  * xhr
  * SuperAgent
  * Axios

#### Centralize API Call！
#### Demo: fetch
#### Why send a polyfill to everyone?

* **Polyfill** :In web development, a polyfill (or polyfiller) is additional code which provides facilities that are not built into a web browser

#### Mock HTTP
* Nock(unit test)
* Static JSON
* Create development WebServer
  * api-mock
  * JSON server
  * [[JSON Schema faker|https://www.npmjs.com/package/json-schema-faker]]
  * Browsersync

#### Demo
1. Declare our schema:
  * [[JSON Schema faker|https://www.npmjs.com/package/json-schema-faker]]
2. Generate Random Data:
  * [[faker.js|https://github.com/Marak/faker.js]]
  * [[chance.js|http://chancejs.com/]]
  * randexp.js
3. Server Data via API
  * [[JSON Server|https://github.com/typicode/json-server]]

* http://json-schema.org/
* http://json-schema-faker.js.org/#gist/d9e27543d84157c1672f87e93ac250cc demo of how data would be using JSON Faker

```sh
npm run generate-mock-data
npm run start-mockapi
```

## Project Structures

## Production Build
#### Minification/ Sourcemaps
* Shorten variable and function names
* Remove comments
* Removes whitespace and new lines
* Dead code elimination /Tree-shaking
```sh
npm start -s
http://localhost:3000/
http://localhost:3000/?userMockApi=true
npm run build -s

```

#### Dynamic html
* Reference bundles automatically
* Handle dynamic bundle names
* Inject production only resources
* Minify

#### Bundle splitting
* Speed initial page load
* Avoid re-downloading all Libraries

```sh
(main.js, vendor.js)
```
#### Cache busting

#### Error Logging
