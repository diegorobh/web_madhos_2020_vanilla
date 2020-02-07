const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/:id", function(req, res){
    var area = req.params.id;
    console.log("running");
    console.log(req.params.id);
    //res.send("data");
    db.select(['docs.id','docs.codigo','docs.titulo','docs.url','cab.cabecera_id','cab.cabecera_titulo'])
    .from('documentos as docs')
    .innerJoin('cabecera as cab', 'cab.cabecera_id', 'docs.cabecera_id')
    .where('docs.area_id', area)
    .then(function(data){
        res.send(data)
    })
/*
    id: 1,
    codigo: "a_485",
    titulo: "a1",
    url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
    cabecera_id: 1,
    cabecera_titulo: "Procedimientos"
    */
    /*
    select
    */
    //select * from todo
})
/*
router.post("/", function(req, res){
    console.log(req.body);
    //INSERT INTO tablename(col1, col2) VALUES (col1value, col2value);
//SELECT * FROM table WHERE id = inserted_row
    db.insert(req.body).returning(*).into("todo").then(function(data){
        res.send(data)
    })
})

router.put("/:id", function(req, res){
    console.log(req.params.id);
    //SELECT * FROM todo WHERE id = ourId
    db("todo").where({ id: req.params.id }).update(
{title:req.body.title || null, is_done: req.body.is_done || null}
).returning("*").then(function(data){
    res.send(data);
})
// if undefined it is going to skip and leave the value, so its better to set as nul if is undefined
})

router.delete("/:id", function(req, res){
    db("todo").where({id: req.params.id}).del().then(function(){
    res.json({success:true})
})
})*/

module.exports = router