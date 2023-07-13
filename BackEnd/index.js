import express from "express"
import mongoose from "mongoose"
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken"
import User from "./Model/User.js"
import RouteUser  from "./Route/RouteUser.js"
import RouteAnnonce from "./Route/RouteAnnonce.js"
import RoutePanier from "./Route/RoutePanier.js"
import cors from "cors"

let app = express() // cree un nv serveur sur lequelle on va ecouter

mongoose.connect(`mongodb+srv://nabila:MongoDbAtlas2023!@cluster0.zis9uhe.mongodb.net/`, //connexion a base de donnees
{ useNewUrlParser: true, useUnifiedTopology: true , dbName:'Tp' }) //outil de parsage 
.then (()=> console.log("connexion a la base de donnée etablis")) //la reponse 
.catch(()=> console.log("connexion a la base de donnée echouee"))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})) //parser les requete en prompt

app.use ('/user', RouteUser)
app.use ('/annonce', RouteAnnonce)
app.use ('/panier', RoutePanier)



let port=1900
app.listen(port, ()=>console.log(`le serveur tourne bien sur le port ${port}`))  