const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const createTasks = require("./createTask")
const getTasks = require("./getTasks")
const createUser = require("./createUser")
const getUser = require("./getUser")

const router = Router();

// server.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/createTask", createTasks)
router.use("/getTasks", getTasks)
router.use("/createUser", createUser)
router.use("/getUser", getUser)


router.get("/error", (req, res) => {
    res.status(404);
    res.send("No se encontro dicha ruta")
})

module.exports = router;
