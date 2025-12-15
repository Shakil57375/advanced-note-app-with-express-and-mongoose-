import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server : Server

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://mongodb:K2YZgulFhjDVi1VZ@cluster0.0rlf0ks.mongodb.net/todosDB?appName=Cluster0'
    );
    console.log("connected to mongodb using mongoose")
    server= app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main();