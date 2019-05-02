'use strict';

// this is a commonJS module
const path = require('path');


function parsePath(filename) {
    return path.parse(filename)
}

function main() {
    const filename = __filename;
    const parsed = parsePath(filename);
    console.log('my extension is ', parsed.ext);
}

main();
