let orm = require("../config/orm.js")

// Call the orm functions using burger specific input for the orm
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers",(res)=>{cb(res)})
    }
}
// orm.insertOne()
// orm.updateOne()

module.exports = burger