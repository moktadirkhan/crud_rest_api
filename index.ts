import express,{Request,Response} from 'express';
import cors from "cors";
import helmet from "helmet";
import db from './src/config/db.config';
import router from "./src/route/book.route";

const app=express();
const port=6000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', router);


db.sync().then(()=>{
    console.log("Connected to db");
})

app.get('/',(req,res)=>{
     res.json({message:"hello from api"});
})

app.listen(port,()=>{
    console.log("server running on port "+port);
});