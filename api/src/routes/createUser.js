const router = require('express').Router();
const { User } = require("../db")

router.post("/", (req, res) => {

    console.log(req.body,"el body de la info")
    const {displayName, email, nombre} = req.body

    if(!nombre){
        User.findOne({
            where: { email: email }
        })
        .then((resp) => {
            if(resp){
                
                return res.send("El usuario ya existe, porfavor inicie sesion")
            
            }else{
                
                User.create({
                    name: displayName,
                    email: email
                })
                .then((resp) => {
                    res.send(resp)
                })
            
            }
        })
    }else{
        
        User.findOne({
            where: { email: email }
        })
        .then((resp) => {
            if(resp){
                
                return res.send("El usuario ya existe, porfavor inicie sesion")
            
            }else{
                
                User.create({
                    name: nombre,
                    email: email
                })
                .then((resp) => {
                    res.send(resp)
                })
            
            }
        })

    }

    
    



})




module.exports= router