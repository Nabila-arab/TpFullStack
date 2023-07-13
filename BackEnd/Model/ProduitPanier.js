import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
   idClient: {
    type: mongoose.Schema.Types.ObjectId,ref: 'user' },
    qteAchat: {type:Number ,default:1} ,
    idAnnonce : {
        type: mongoose.Schema.Types.ObjectId,ref: 'annonce' },
});

// userSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         let hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//     }
//     next();
// });

const ProduitPanier = mongoose.model("produitpanier", userSchema);

export default ProduitPanier;