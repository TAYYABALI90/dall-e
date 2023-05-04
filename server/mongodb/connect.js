import mongoose from "mongoose";

const connectDB = (url) => {

    mongoose.set('strictQuery', true);

    mongoose.connect(url)

        .then(() => console.log('Connected to MongoDB'))

        .catch((err) => {
        
            console.error('failed to connect with MongoDB');
        
            console.error(err);
        
        });

};

export default connectDB;