var expect = require('chai').expect;
var axios = require('axios');
var generator = require('../generator');
var geometry = require('../../../bin/geometry');
var THREE = require('../../three');
global.THREE = THREE;

describe('BoxGeometry', function() {
    it('numOfTrianglesFaces', function() {
        expect(geometry.numOfTrianglesFaces( generator.boxGeometry() )).to.be.equal( 12 );
    });
    it('numOfTrianglesVertices', function () {
        expect(geometry.numOfTrianglesVertices( generator.boxGeometry() )).to.be.equal( 8 );
    });
    it('whd', function (){
        expect(geometry.whd( generator.boxGeometry())).to.be.deep.equal({ x: 1, y: 1, z: 1 });
    });
    it('surfaceWithVolume', function (){
        expect(geometry.surfaceWithVolume( generator.boxGeometry())).to.be.deep.equal({ volume: 1.00, area: 6.00 });
    });
    it('surfaceArea', function (){
        expect(geometry.surfaceArea( generator.boxGeometry())).to.be.equal( 6.00 );
    });
    it('volume', function (){
        expect(geometry.volume( generator.boxGeometry())).to.be.equal( 1.00 );
    });
});

describe('ShpereGeometry', function() {
    it('numOfTrianglesFaces', function() {
        expect(geometry.numOfTrianglesFaces( generator.shpereGeometry() )).to.be.equal( 1984 );
    });
    it('numOfTrianglesVertices', function () {
        expect(geometry.numOfTrianglesVertices( generator.shpereGeometry() )).to.be.equal( 994 );
    });
    it('whd', function (){
        expect(geometry.whd( generator.shpereGeometry())).to.be.deep.equal({ x: 10, y: 10, z: 10 });
    });
    it('surfaceWithVolume', function (){
        expect(geometry.surfaceWithVolume( generator.shpereGeometry())).to.be.deep.equal({ volume: 518.99, area: 312.77 });
    });
    it('surfaceArea', function (){
        expect(geometry.surfaceArea( generator.shpereGeometry())).to.be.equal( 312.77 );
    });
    it('volume', function (){
        expect(geometry.volume( generator.shpereGeometry())).to.be.equal( 518.99 );
    });
});


