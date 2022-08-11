const router = require("express").Router();
const { Task } = require("../db");

router.post("/", (req, res) => {
  const { name, description } = req.body;

  try {
      const newTask = Task.create({
        name,
        description,
      })
      newTask.then((resp) => {
        res.send(resp);
      })
  } catch (error) {
    console.log(error);
    res.status(400).send("no se pudieron traer las tareas");
  }
});

module.exports = router;
