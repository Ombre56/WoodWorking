import mongoose from 'mongoose';

const connectMongo = async () => { 
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    await mongoose.connect(process.env.MONGODB_URI, connectionParams)
    console.log('Connected to database.')
  } catch (error) {
    console.log(error)
    console.log('Could not connect to database.')
  }
}

export default connectMongo;