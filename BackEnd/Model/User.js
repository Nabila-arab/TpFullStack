import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname: {type:String  },
    email : {
            type:String,
            unique : true,
            required : true

    },
    password: {
            type: String,
            required: true
    },
    createAt: {
            type: Date,
            default: Date.now()
      },
        UpdateAt : {
            type : Date ,
            default: Date.now()},



    
});

userSchema.pre("save", async function (next) { //pour hachee le mot de passe
    if (this.isModified("password")) {
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

const User = mongoose.model("User", userSchema);

export default User;