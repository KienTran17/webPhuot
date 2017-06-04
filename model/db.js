const pg = require('pg');

const config = {
  user: 'ayubkmaqniyaop', //env var: PGUSER
 database: 'd8g4s88jrgkdai', //env var: PGDATABASE
 password: '854bc267795cbc4a097fe333ccaf3551773b88f89cb2cd1b30086625416745c9', //env var: PGPASSWORD
 host: 'ec2-54-83-25-217.compute-1.amazonaws.com', // Server hosting the postgres database
 port: 5432, //env var: PGPORT
 ssl:true,
 max: 10, // max number of clients in the pool
 idleTimeoutMillis: 1000 // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

const queryDB = (sql, arrayData) => (
    new Promise((resolve, reject) =>{
         pool.connect((err,client,done)=>{
             if(err) reject(err +'');
             client.query(sql,arrayData, (errQuery, result)=>{
                 done(errQuery);
                 if(errQuery) return reject(errQuery);
                 return resolve(result);
             })
         })
    })
)

// queryDB('select * from "user"',[])
//  .then(res=> console.log(res.rows));
module.exports = queryDB;
