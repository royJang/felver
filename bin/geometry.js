import { normalizeGeometry } from './util';

/**
 * volume of triangle
 * @param { Vector3 } point1 
 * @param { Vector3 } point2 
 * @param { Vector3 } point3 
 * @returns { Number }
 */
function volumeOfTriangle ( point1, point2, point3 ) {
    var v321 = point3.x * point2.y * point1.z;
    var v231 = point2.x * point3.y * point1.z;
    var v312 = point3.x * point1.y * point2.z;
    var v132 = point1.x * point3.y * point2.z;
    var v213 = point2.x * point1.y * point3.z;
    var v123 = point1.x * point2.y * point3.z;
    return ( 1.0 / 6.0 ) * ( -v321 + v231 + v312 - v132 - v213 + v123 );
}

/**
 * surface of triangle
 * @param { Vector3 } point1
 * @param { Vector3 } point2
 * @param { Vector3 } point3
 * @returns { Number }
 */
function surfaceOfTriangle ( point1, point2, point3 ) {
    var ax = point2.x - point1.x;
    var ay = point2.y - point1.y;
    var az = point2.z - point1.z;
    var bx = point3.x - point1.x;
    var by = point3.y - point1.y;
    var bz = point3.z - point1.z;       
    var cx = ay * bz - az * by;
    var cy = az * bx - ax * bz;
    var cz = ax * by - ay * bx;
    return 0.5 * Math.sqrt( cx * cx + cy * cy + cz * cz );
}

/**
 * 
 * @param { Array } vertices 
 * @param { Array } faces 
 */
function volume ( vertices, faces ){
    return faces.reduce(( prev, cur ) => {
        return volumeOfTriangle( vertices[ prev.a ], vertices[ prev.b ], vertices[ prev.c ]  ) +=
            volumeOfTriangle( vertices[ cur.a ], vertices[ cur.b ], vertices[ cur.c ] );
    });
}

/**
 * get model's surface area
 * @param { Array } vertices 
 * @param { Array } faces 
 */
function surfaceArea ( vertices, faces ){
    return faces.reduce(( prev, cur ) => {
        return surfaceOfTriangle( vertices[ prev.a ], vertices[ prev.b ], vertices[ prev.c ]  ) +=
            surfaceOfTriangle( vertices[ cur.a ], vertices[ cur.b ], vertices[ cur.c ] );
    });
}   

function whd ( object ){
    var box;
    if( object instanceof THREE.Mesh ){
        box = mesh.geometry.boundingBox;
    } else if( object instanceof THREE.Geometry || object instanceof THREE.BufferGeometry ){
        box = normalizeGeometry( object ).boundingBox;
    } else {
        throw new Error( `object must be a mesh or geometry` )
    }
    return {
        x: ( box.max.x - box.min.x ),
        y: ( box.max.y - box.min.y ),
        z: ( box.max.z - box.min.z )
    };      
}   