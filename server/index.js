const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 8000

// middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hn7k2u4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    const servceCollection=client.db('jerinsDB').collection('services');
    const userCollection=client.db('jerinsDB').collection('users');
    const reviewCollection=client.db('jerinsDB').collection('reviews')
    // auth related api
    
    // get all service
    app.get('/service',async(req,res)=>{
      const result=await servceCollection.find().toArray();
      res.send(result)
    })
    //  review api
     app.get('/review',async(req,res)=>{
        const result=await reviewCollection.find().toArray();
        res.send(result);
     })
     
    // user api
    app.get('/user',async(req,res)=>{
    const result=await userCollection.find().toArray();
    res.send(result)
   })
   app.post('/user',async(req,res)=>{
    const user=req.body;
    const result=await userCollection.insertOne(user);
    res.send(result)
   })
  

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello from jerins parlour Server..')
})

app.listen(port, () => {
  console.log(`jerins Parlour is running on port ${port}`)
})