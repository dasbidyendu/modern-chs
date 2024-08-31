import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {};

export default async function dbConnect(): Promise<void>{
    if (connection.isConnected) {
        console.log("Already connected");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '',{})
        connection.isConnected = db.connections[0].readyState
        console.log("Connected Successfully")
    }
    catch (err:any) {
        console.log("DB Connect failed ",err.message,err);
     }
}