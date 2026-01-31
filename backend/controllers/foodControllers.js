import foodModel from "../models/foodModel.js";
import fs from "fs";
//get all foods
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });
    try {
        await food.save();
        res.json({ message: "Food Added Successfully", success: true });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error in Adding Food", success: false });
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({}); 
        res.json({success:true, data:foods }); 
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Internal Server Error" });
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
            // Delete the associated image file
            fs.unlink(`uploads/${food.image}`, () => {});
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({ success: true, message: "Food Item Removed Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal Server Error" });
    }
}
export { addFood,listFood,removeFood };