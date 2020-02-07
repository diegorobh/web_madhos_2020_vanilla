console.log("inicia");
const knex = require("knex")({
    client:"pg",
    connection: {
        host:"172.16.29.243",
        database:"MADHOS_DUANA",
        user : "dusoft",
        password : "FZo1ydOfQGm1FDlm"
    }  
});
console.log("termina");
module.exports = knex;