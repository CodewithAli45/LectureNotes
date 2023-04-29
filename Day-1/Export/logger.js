// (function(exports, require, module, __filename, __dirname) {
//     console.log('exports', exports);
//     console.log('require', require);
//     console.log('module', module);
//     console.log('__filename', __filename);
//     console.log('__dirname', __dirname);
// })(exports, require, module, __filename, __dirname);

// console.log('exports', exports);
// console.log('require', require);
// console.log('module', module);
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);

function add(...n){
    let sum = 0;
    for(let num of n){
        sum += num;
    }
    return sum;
}
function subtract(...n){
    let minus = 0;
    for(let num of n){
        minus -= num;
    }
    return minus;
}
// below is called default export and in export file we can
// rename the add 
// module.exports = add;

// named export
// module.exports.add = add;

//best approach
module.exports = {
    add,
    subtract,
}
console.log('exports', module);