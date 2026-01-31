import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://deepaktech:Dee6205@cluster0.zonzccq.mongodb.net/food-app").then(()=>console.log("DB Connected"))
};
