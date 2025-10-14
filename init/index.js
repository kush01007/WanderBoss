const mongoose = require('mongoose');
const initData=require("./data.js");
const mongoURL="mongodb://127.0.0.1:27017/wanderboss"
const Listing=require("../models/listing.js")
main()
.then(()=>{
    console.log("monodb connected");
}
).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURL);
}
const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"68dbc9470064d0fb5647ebf2"}));
    await Listing.insertMany(initData.data);
    console.log("data went succesfull");
};
initDB();