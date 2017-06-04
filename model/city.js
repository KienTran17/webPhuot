const queryDB  = require('./db');

const getAllCity = ()=>( 
    queryDB(`select * from "city"`,[])
);

module.exports = {getAllCity};