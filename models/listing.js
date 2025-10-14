const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const Review=require("./review.js");
const { required } = require('joi');
const listeningSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    image: {
        type: {
        filename: String,
        url: { type: String, default: "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",set:(v)=>v===""? "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v, }
        }
   },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
   }
});

listeningSchema.post("findOneAndDelete",async(listing)=>{
    if(listing) {
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
    
});
// a middleware to delete reviews if listing is deleted

const Listing=mongoose.model("Listing",listeningSchema);
module.exports=Listing;