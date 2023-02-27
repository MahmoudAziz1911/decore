import ConnectToDB from "@/utils/connectDB";
import { getProduct } from "@/controllers/products-controllers";

async function handler(req, res) {
    await ConnectToDB();

    if(req.method === "GET"){
        return getProduct(req, res)
    }
}

export default handler;