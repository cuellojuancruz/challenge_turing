const router = require('express').Router();
const { Task } = require("../db");


router.get("/", (req, res) => {


  
    try {
  
      const tasks = Task.findAll()
      tasks.then((resp) => {
        res.send(resp)
      })
  
    } catch (error) {
  
      console.log(error)
      res.status(400).send("no se pudieron traer las tareas");
  
    }

})




module.exports= router
