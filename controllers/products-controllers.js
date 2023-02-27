import Product from "@/models/Product";

export const getAllProducts = async(req, res) => {

    try {
        const products = await Product.find()
        if(!products) {
            return res.status(500).json({message: "internal server error"})
        }
        res.json({ products })

    } catch (error) {
        return res.status(500).json({ err: err.message })
    }

}

export const getroduct = async(req, res) => {
    try {
        const { id } = req.query;
        const product = await Product.findById(id);
        if(!product) return res.status(400).json({ message: "this Product does not exist." })
        
        res.json({ product });

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}


export const getProduct = async(req, res) => {
    const {id} = req.query;
    let product;
    try {
        product = await Product.findById(id);
    } catch (error) {
        return new Error(error)
    }

    if(!product) {
        return res.status(404).json({ message: "No Book Founded"});
    }

    return res.status(200).json({product})
    
}