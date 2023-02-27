import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "user"
    },
    root: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: "https://img.freepik.com/premium-vector/people-tick-person-with-checkmark_532867-479.jpg"
    }
}, {
    timestamps: true
})

const User = models?.User || model("User", userSchema);
export default User;