import mongoose from 'mongoose';

// fot the search functionality
const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('Connected to MongoDB...'.yellow))
    .catch((err) => console.log(err));
};

export default connectDB;
