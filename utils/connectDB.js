import mongoose from "mongoose";

const ConnectToDB = async () => {
    mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Database Connected"))
            .catch((err) => console.log(err))
    
    
/*     if(mongoose.connections[0].readyState) {
        console.log("Already Connected...")
        return;
    }

    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log("Connected To MongoDb...")
    })
 */}


export default ConnectToDB

export function convertDocToObj(doc) {
    doc._id = doc._id.toString();
    doc.createdAt = doc.createdAt.toString();
    doc.updatedAt = doc.updatedAt.toString();
    return doc;
  }
