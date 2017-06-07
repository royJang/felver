export function boxGeometry (){
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3({ x: 0.5, y: 0.5, z: 0.5 }),
        new THREE.Vector3({ x: 0.5, y: 0.5, z: -0.5 }),
        new THREE.Vector3({ x: 0.5, y: -0.5, z: 0.5 }),
        new THREE.Vector3({ x: 0.5, y: -0.5, z: -0.5 }),
        new THREE.Vector3({ x: -0.5, y: 0.5, z: -0.5 }),
        new THREE.Vector3({ x: -0.5, y: 0.5, z: 0.5 }),
        new THREE.Vector3({ x: -0.5, y: -0.5, z: -0.5 }),
        new THREE.Vector3({ x: -0.5, y: -0.5, z: 0.5 })
    );
    geometry.faces.push(
        new THREE.Face3( 0, 2, 1 ),
        new THREE.Face3( 2, 3, 1 ),
        new THREE.Face3( 4, 6, 5 ),
        new THREE.Face3( 6, 7, 5 ),
        new THREE.Face3( 4, 5, 1 ),
        new THREE.Face3( 5, 0, 1 ),
        new THREE.Face3( 7, 6, 2 ),
        new THREE.Face3( 6, 3, 2 ),
        new THREE.Face3( 5, 7, 0 ),
        new THREE.Face3( 7, 2, 0 ),
        new THREE.Face3( 1, 3, 4 ),
        new THREE.Face3( 3, 6, 4 )
    );
    return geometry;
}