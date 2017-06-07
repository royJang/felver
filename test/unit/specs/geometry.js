var expect = require('chai').expect;
var axios = require('axios');
var generator = require('../generator');
var geometry = require('../../../bin/geometry');
var THREE = require('../../three');
global.THREE = THREE;

describe('numOfTrianglesFaces', function() {
    it('<Geometry>(numOfTrianglesFaces)', function() {
        expect(geometry.numOfTrianglesFaces( generator.boxGeometry() )).to.be.equal( 12 );
    });
    it('<Geometry>(numOfTrianglesVertices)', function () {
        expect(geometry.numOfTrianglesVertices( generator.boxGeometry() )).to.be.equal( 8 );
    });
    it('<Gemetry>(whd)', function (){
        geometry.whd(generator.boxGeometry());
        // expect(geometry.whd( generator.boxGeometry()) ).to.be.equal({ x: 1, y: 1, z: 1 });
    });
});


