import jwt from "jsonwebtoken"
import User from "../Model/User.js";
import bcrypt from "bcrypt"
import  Express  from "express";



export const Auth =(req, res , next) => { //GRACE A LAUTH EN RECUPERE LE USER CONNECTER
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, 'secret_key' , function (err, payload) {
        if (err) {
            res.status(401).json({ message: "Unauthorized" });
        } else next()
    });
}


export const CreateUser =async (req, res) => { 
    try {let { email,  fullname , password} = req.body;      
      let Users = await User.create({ email,  fullname ,  password });     
         res.status(200).json(Users);

     }catch (err) {res.status(400).json(err); 
}};

export const  inscription =async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            let user = await User.create(req.body);
		    res.status(200).json({message: "User créé"});
        } else {
            res.status(400).json({ message: "Email deja existant" });
        }

        
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: "Erreur pendant inscription" });
    }
};




export const SeConnecter =async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) { 

            let isMatch = await bcrypt.compare(
                req.body.password,
                user.password
        
            );
            if (isMatch) {
              // console.log(user)
              let token = jwt.sign({ id: user.id }, 'secret_key',{expiresIn:'1h'});
              res.status(200).json({ token, email: user.email });
          } else {
              res.status(400).json({ message: "Invalid mot de pass" });
          }
      } else res.status(400).json({ message: "User n'éxiste pas" });
  } catch (err) {
      res.status(400).json({ message: "Erreur pendant inscription" });
  }
  };

