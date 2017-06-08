/**
 * convert buffer to arrayBuffer
 * @param { Buffer } buffer
 * @returns { ArrayBuffer }
 */
export function toArrayBuffer ( buffer ){
    var ab = new ArrayBuffer( buffer.length );
    var view = new Uint8Array( ab );
    for ( var i = 0; i < buffer.length; ++i ) {
        view[ i ] = buffer[ i ];
    }
    return ab;
}

/**
 * covert arrayBuffer to buffer
 * @param { ArrayBuffer } array buffer
 * @returns { Buffer }
 */
export function toBuffer( ab ) {
    var buffer = new Buffer( ab.byteLength );
    var view = new Uint8Array( ab );
    for ( var i = 0; i < buffer.length; ++i ){
        buffer[ i ] = view[ i ];
    }
    return buffer;
}