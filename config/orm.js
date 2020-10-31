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
    selectall: function(tableInput,cb){
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString,(err,result)=>{
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function(table,cols,vals,cb){
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${makeWildcard(vals.length)})`
    },

    updateOne: function(){

    }
}
module.exports = orm