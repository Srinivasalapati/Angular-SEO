import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist-server/Angular-SEO/main');

enableProdMode();

const app = express();

const indexHtml = readFileSync(__dirname + '/dist/Angular-SEO/index.html', 'utf-8').toString();


app.get('*.*', express.static(__dirname + '/dist', {
    maxAge: '1y'
}));

app.route('*').get((req, res) => {

    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: req.url,
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
       ]
    })
        .then(html => {
            res.status(200).send(html);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });

});

app.listen(9000, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:9000`);
});