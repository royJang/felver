import { normalizeGeometry, isGeometry } from './util';

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
 * get model's volume
 * @param { Geometry, BufferGeometry } geometry  
 * @returns { Number } volume
 */
export function volume ( geometry ){
    var geo = normalizeGeometry( geometry ),
        volume = 0;
    geo.faces.forEach( face => {
        volume += volumeOfTriangle( geo.vertices[ face.a ], geo.vertices[ face.b ], geo.vertices[ face.c ] );
    });
    return volume;
}

/**
 * get model's surface area
 * @param { Geometry, BufferGeometry } geometry 
 * @returns { Number } surface area
 */
export function surfaceArea ( geometry ){
    var geo = normalizeGeometry( geometry ),
        area = 0;
    geo.faces.forEach( face => {
        area += surfaceOfTriangle( geo.vertices[ face.a ], geo.vertices[ face.b ], geo.vertices[ face.c ] );
    });
    return area;
}   

// get model's surface area and volume
/**
 * @param { Geometry, BufferGeometry } geometry 
 * @returns { Obejct } area, volume
 */
export function surfaceWithVolume ( geometry ){
    var geo = normalizeGeometry( geometry ),
        area = 0,
        volume = 0;
    geo.faces.forEach( face => {
        volume += volumeOfTriangle( geo.vertices[ face.a ], geo.vertices[ face.b ], geo.vertices[ face.c ] );
        area += surfaceOfTriangle( geo.vertices[ face.a ], geo.vertices[ face.b ], geo.vertices[ face.c ] );
    });
    return {
        "area": area,
        "volume": volume
    };
}

//  get model's width, height, depth
/**
 * 
 * @param { Geometry, BufferGeometry } geometry 
 * @returns {  Object } x, y, z
 */
export function whd ( geometry ){
    var box = normalizeGeometry( geometry ).boundingBox;
    return {
        x: ( box.max.x - box.min.x ),
        y: ( box.max.y - box.min.y ),
        z: ( box.max.z - box.min.z )
    };      
}   

/**
 * number of triangles vertices
 * @param { Geometry, BufferGeometry } geometry 
 * @returns { Number } length
 */
export function numOfTrianglesVertices ( geometry ){
    var geo = normalizeGeometry( geometry );
    return geo.vertices.length;
}   

/**
 * number of triangles faces
 * @param { Geometry, BufferGeometry } geometry 
 * @returns { Number } length
 */
export function numOfTrianglesFaces ( geometry ){
    var geo = normalizeGeometry( geometry );
    return geo.faces.length;
}