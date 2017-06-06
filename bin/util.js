/**
 * BufferGeometry to geometry
 * @param { BufferGeometry } geometry
 * @returns { Geometry }
 */ 
export function normalizeGeometry ( geo ){
    return geo instanceof THREE.BufferGeometry 
            ? ( new THREE.Geometry ).fromBufferGeometry( geo )   
            : geo;  
} 

/**
 * @param { type } type 
 * @returns { Function }
 * @example isSTL = is('stl);   isSTL('anyone.stl');    //true
 */
export function is ( type ){
    var re = new RegExp( `\.${ type }$`, 'i' );
    return function ( name ){
        return re.test( name );
    }
}

/**
 * 
 * @param { String } name 
 * @returns { Boolean }
 */
export function isSTL ( name ){
    return is('stl')( name );
}

/**
 * 
 * @param { String } name 
 * @returns { Boolean }
 */
export function isOBJ ( name ){
    return is('obj')( name );
}

/**
 * 
 * @param { String } name 
 * @returns { Boolean }
 */
export function isFBX ( name ){
    return is('fbx')( name );
}