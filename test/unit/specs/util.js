var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var generator = require('../generator');
var util = require('../../../bin/util');
var THREE = require('../../three');
global.THREE = THREE;

describe('util', function() {
    it('isEmptyGeometry', function (){
        assert.equal(util.isEmptyGeometry(generator.boxGeometry()), false);
        assert.equal(util.isEmptyGeometry(generator.shpereGeometry()), false);
        assert.equal(util.isEmptyGeometry(generator.emptyGeometry()), true);
        assert.equal(util.isEmptyGeometry(generator.emptyBufferGeometry()), true);
        expect(util.isEmptyGeometry(generator.emptyMesh())).to.be.an.instanceOf(Error);
        expect(util.isEmptyGeometry(undefined)).to.be.an.instanceOf(Error);
        expect(util.isEmptyGeometry(null)).to.be.an.instanceOf(Error);
    });

    it('isGeometry', function() {
        assert.equal(util.isGeometry(generator.emptyGeometry()), true);
        assert.equal(util.isGeometry(generator.emptyBufferGeometry()), true);
        assert.equal(util.isGeometry(generator.emptyMesh()), false);  
        assert.equal(util.isGeometry(undefined), false);
        assert.equal(util.isGeometry(null), false);
        assert.equal(util.isGeometry('string'), false);
    });

    it('normalizeGeometry', function (){
        expect(util.normalizeGeometry(generator.emptyGeometry())).to.be.an.instanceOf(THREE.Geometry);
        expect(util.normalizeGeometry(generator.emptyBufferGeometry())).to.be.an.instanceOf(THREE.Geometry);
        expect(util.normalizeGeometry(generator.emptyMesh)).to.be.an.instanceOf(Error);
        expect(util.normalizeGeometry(undefined)).to.be.an.instanceOf(Error);
        expect(util.normalizeGeometry(null)).to.be.an.instanceOf(Error);
    });

    it('isSTL', function (){
        assert.equal(util.isSTL('http://example.com/felver.stl'), true);
        assert.equal(util.isSTL('https://example.com/felver.stl'), true);
        assert.equal(util.isSTL('//example.com/felver.stl'), true);
        assert.equal(util.isSTL('//example.com/felver.stl'), true);
        assert.equal(util.isSTL('//example.com/felver.stl.stl'), true);
        assert.equal(util.isSTL('//example.com/felver.stl.obj'), false);
    });

    it('isOBJ', function (){
        assert.equal(util.isOBJ('http://example.com/felver.obj'), true);
        assert.equal(util.isOBJ('https://example.com/felver.obj'), true);
        assert.equal(util.isOBJ('//example.com/felver.obj'), true);
        assert.equal(util.isOBJ('//example.com/felver.obj'), true);
        assert.equal(util.isOBJ('//example.com/felver.obj.obj'), true);
        assert.equal(util.isOBJ('//example.com/felver.obj.stl'), false);
    });
});