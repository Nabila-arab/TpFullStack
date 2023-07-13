import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    nom: {type:String  , required:true},
    prix : Number,
    description :String,
    photo:String ,
    qteDispo:{type:Number ,default:1} ,
    idClient: {
        type: mongoose.Schema.Types.ObjectId,ref: 'user' },
    createdAt: {type : Date , default: Date.now},
    UpdateAt : {type : Date , default: Date.now},

});

// userSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         let hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//     }
//     next();
// });

const Annonce = mongoose.model("annonce", userSchema);

export default Annonce;

