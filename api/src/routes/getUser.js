const router = require("express").Router();
const { User } = require("../db");

router.get("/:email/:password", (req, res) => {
  const { email, password } = req.params;
  console.log(email, password)

  try {

    if(password === "contraseña"){
      const admin =  User.findOne({
        where:{
          email: email
        }
      })
      admin.then((resp) => {
        console.log(resp, "esta es la respuesta del find")
        return res.status(200).send(resp)
      })
    }
    else{
      
      const user =  User.findOne({
        where:{
          email: email
        }
      })
  
      user.then((resp) => {
        if(resp){
          return res.send(resp)
        }else{
          return res.status(400).send("not-Authenticated")
        }
      })

    }

  } catch (error) {
    console.log(error);
    res.status(400).send("no se pudieron traer las tareas");
  }

});

module.exports = router;
