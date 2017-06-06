['STL', 'OBJ', 'JSON', 'OBJ-MTL', 'FBX'].forEach( format => {
    var result = [];
    result.push(`import \$${format}Loader from '../assets/${format}Loader'; 
        export const STLLoader = \$${format}Loader;`);
    result.join('\n');
    fs.outputFileSync('');
});