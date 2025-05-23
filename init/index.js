<<<<<<< HEAD
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("conected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany();
    initData.data = initData.data.map((obj) =>({
        ...obj, 
        owner: "67504b539166e833bd41cc61",
    }));     
        
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

=======
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("conected to DB");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL)
}

const initDB = async () => {
    await Listing.deleteMany();
    initData.data = initData.data.map((obj) =>({
        ...obj, 
        owner: "67504b539166e833bd41cc61",
    }));     
        
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
initDB();