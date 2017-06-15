function isEmptyObject ( object ){
    return !(typeof object === 'object' && Object.keys( object ).length > 0);
}

/**
 * the geometry is empty? return true is Empty
 * @param {(Geometry | BufferGeometry )} - geometry
 * @returns { Boolean }
 */
export function isEmptyGeometry ( geo ){
    if( geo instanceof THREE.Geometry ){
        return geo.vertices.length === 0 && geo.faces.length === 0;
    } else if( geo instanceof THREE.BufferGeometry ){
        if( isEmptyObject( geo.attributes ) ){
            return true;
        } else {
            return !(geo.attributes.vertices && geo.attributes.faces );
        }
    } else {    
        return new Error(`${geo} is not a Geometry`);
    }
}

/**
 * BufferGeometry to geometry
 * @param { BufferGeometry } - geometry
 * @returns { Geometry }
 * @example
 * normalizeGeometry( BufferGeometry ) -> geometry
 */ 
export function normalizeGeometry ( geo ){
    if(!isGeometry( geo )) return new Error( `The parameter must be Geometry or BufferGeometry` );
    if( isEmptyGeometry( geo ) ) return new THREE.Geometry();
    return geo instanceof THREE.BufferGeometry 
            ? ( new THREE.Geometry ).fromBufferGeometry( geo )   
            : geo;  
}   

/**
 * is Geometry or BufferGeometry
 * @param {(Geometry | BufferGeometry )} - geometry
 * @returns { Boolean } 
 */
export function isGeometry ( geo ){
    return geo instanceof THREE.Geometry || geo instanceof THREE.BufferGeometry;
}

/**
 * @private
 * @param { type } type 
 * @returns { Function }
 * @example 
 * isSTL = is('stl);   
 */
export function is ( type ){
    var re = new RegExp( `\.${ type }$`, 'i' );
    return function ( name ){
        return re.test( name );
    }
}

/**
 * is STL
 * @param { String } - file name 
 * @returns { Boolean }
 * @example
 * isSTL('anyone.stl');    //true
 * isSTL('anyone.stl.obj'); //false
 */
export function isSTL ( name ){
    return is('stl')( name );
}

/**
 * 
 * @param { String } - file name 
 * @returns { Boolean }
 * @example
 * isOBJ('anyone.obj'); //true
 */
export function isOBJ ( name ){
    return is('obj')( name );
}

/**
 * 
 * @param { String } - file name 
 * @returns { Boolean }
 */
export function isFBX ( name ){
    return is('fbx')( name );
}