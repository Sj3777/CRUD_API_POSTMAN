const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true,
    },
    Email:{
        type: String,
        reuired: true,
    },
    Phone:{
        type:Number,
        reuired:true,
    },
    Department:{
        type:String,
        required:true,
    }

});

module.exports=mongoose.model("Contact",contactSchema);