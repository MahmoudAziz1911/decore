import ConnectToDB from "@/utils/connectDB";
import { createUser } from "@/controllers/users-controllers";

ConnectToDB();

export default async(req, res) => {    
    switch (req.method) {
        case "POST":
            await createUser(req, res)
            break;
    }
}
   

