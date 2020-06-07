import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { writeFileSync } from 'fs'
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist-server/main')

renderModuleFactory(AppServerModuleNgFactory, {
    document: '<app-root></app-root>',
    url : '/',
    extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP)
   ]
}).then((html)=>{
    console.log(html, "prerender")
    writeFileSync('./prerender.html', html)
}).catch((error)=>{
    console.log(error)
})