const express=require('express')
const app=express();

const model=require('./Model/Model')
app.use(express.json());

const cors=require('cors');
app.use(cors());

const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/LaFo");
app.get(('/'),(req,res)=>{
    res.send("Server Connected");
})


app.post('/users', async (req, res) => {
    const body = req.body;
    try {
        const data = new model(
            body
        );
        const result = await data.save();
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error)
    }
})


app.get(('/findall'),async(req,res)=>{
    try{
        const userData= await model.find();
        res.status(200).send(userData);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
})

app.delete('/delete/:_id',async(req,res)=>{
    const id=req.params 

    let data=await model.deleteOne(id);
    res.send(data);
})

app.put('/update/:_id',async(req,res)=>{
    let data=await model.updateOne(req.params,
        {
            $set: req.body
        })
        res.send(data);

})

const PORT=4050;
app.listen(PORT,()=>{
    console.log(`LaFo listen on port ${PORT}`);
})