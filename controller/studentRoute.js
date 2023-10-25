const express =require("express");
const studentschema = require("../model/studentSchema");
const studentRoute = new express.Router();

studentRoute.post('/create-student',(req,res)=>{
    studentschema.create(req.body,(err,data)=>
    {
        if(err)
            return err
        else
            res.json(data)
    })
});

studentRoute.get('/',(req,res)=>
{
    studentschema.find((err,data)=>
    {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// at localhost:4000/studentRoute if request is a get request then find() function will be executed

studentRoute.route('/update-student/:id')
.get((req,res)=>
{
    studentschema.findById(req.params.id,(err,data)=>
    {
        if(err)
            return err
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentschema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        if(err) 
            return err
        else
            res.json(data)
    })
});
//is same as 
// studentRoute.get('path',())
// studentRoute.put('path',())

// localhost:4000/studentRoute/update-student/652d2125a854188278e86606 
//     if it is a get request then studentschema.findById will be executed
//      if it is a put request then studentschema.findbyidandUpdate will be executed

studentRoute.delete('/delete-student/:id',(req,res)=>{
    studentschema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
});



module.exports = studentRoute;
