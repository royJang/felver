var THREE = require('./three');
var fs = require('fs');
var path = require('path');
var felver = require('../dist/felver');
global.THREE = THREE;
require('./STLLoader');

var loader = new THREE.STLLoader();

fs.readFile(path.resolve(__dirname, './models/排气管.stl'), function ( err, data ) {
    console.time('a');
    var geometry = loader.parse(toArrayBuffer( data ));
    var result = felver.geometry.surfaceWithVolume( geometry );
    console.log( result );
    console.timeEnd('a');
});

function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}