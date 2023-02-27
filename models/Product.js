import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    inStock: {
        type: Number,
        default: 0
    },
    solid: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    
}, {
    timestamps: true
})

const Product = models?.Product || model("Product", productSchema);
export default Product;