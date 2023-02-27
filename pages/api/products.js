import ConnectToDB from "@/utils/connectDB";
import { getAllProducts } from "@/controllers/products-controllers";

async function handler(req, res) {
    await ConnectToDB();

    if(req.method === "GET"){
        return getAllProducts(req, res)
    }
}

export default handler;