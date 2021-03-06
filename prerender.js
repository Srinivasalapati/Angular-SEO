"use strict";
exports.__esModule = true;
require("zone.js/dist");
var platform_server_1 = require("@angular/platform-server");
var fs_1 = require("fs");
var AppServerModuleNgFactory = require('./dist-server/main').AppServerModuleNgFactory;
platform_server_1.renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url: '/'
}).then(function (html) {
    console.log(html, "prerender");
    fs_1.writeFileSync('./prerender.html', html);
})["catch"](function (error) {
    console.log(error);
});
