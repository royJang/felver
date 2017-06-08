var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var buffer = require('../../../bin/buffer');

describe('Buffer', function() {
    it('toArrayBuffer', function (){
        expect(buffer.toArrayBuffer(new Buffer([]))).to.be.an.instanceof(ArrayBuffer);
    });
    it('toBuffer', function (){
        expect(buffer.toBuffer(new ArrayBuffer([]))).to.be.an.instanceof(Buffer);
    });
});