const router = require('express').Router();
const { Task } = require("../db");


router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    try {
  
      const myTasks = Task.findAll({
        where: {
            userId: id
        }
      })
      myTasks.then((resp) => {
        res.send(resp)
      })
  
    } catch (error) {
  
      console.log(error)
      res.status(400).send("no se pudieron traer las tareas");
  
    }

})




module.exports= router
