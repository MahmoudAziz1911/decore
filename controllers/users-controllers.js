import User from "@/models/User";
import { hashPassword } from "@/utils/hash";
import valid from "@/utils/valid";

export const createUser = async (req, res) => {
    try {
        const { name, email, password, image } = req.body;
        const errMsg = valid(name, email, password);
        if (errMsg) return res.status(400).json({ err: errMsg });

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ err: "Email Already Exists.." });
        }

        const hashed = await hashPassword(password)
        const newUser = new User({ name, email, password: hashed, image})
        console.log(newUser)
        await newUser.save();
        res.json({ msg: "Register Success!" })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}