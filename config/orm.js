let connection = require("./connection.js")

makeWildcard = (num) => {
    let arr = [];
    for (let i=0;i<num;i++){
        arr.push("?")
    }
    return arr.toString()
}

convertSql = (obj) => {
    let arr = [];
}

let orm = {
    selectAll: function(tableInput,cb){
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString,(err,result)=>{
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(table,cols,vals,cb){
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${makeWildcard(vals.length)})`;
        connection.query(queryString,vals,(err,result)=>{
            if (err) throw err;
            cb(result)
        })
    },

    // updateOne: function(){

    // }
}
module.exports = orm