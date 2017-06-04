const queryDB = require('./db');

const getAllWard = () => (
    queryDB(`select * from "ward"  `,[])
);

module.exports = { getAllWard };