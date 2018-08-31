Installation:

- yarn add plop -D
- yarn add plopfile-generate -D
- create plopfile.js in root:

//plopfile.js

module.exports = function(plop) {
const plopInit = require('plopfile-generate');
plopInit(plop);
};
