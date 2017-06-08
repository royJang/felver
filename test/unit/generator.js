export function boxGeometry (){
    return new THREE.BoxGeometry( 1, 1, 1 );
}

export function shpereGeometry (){
    return new THREE.SphereGeometry( 5, 32, 32 );
}

export function emptyGeometry (){
    return new THREE.Geometry();
}

export function emptyBufferGeometry (){
    return new THREE.BufferGeometry();
}

export function emptyMesh (){
    return new THREE.Mesh(emptyGeometry());
}