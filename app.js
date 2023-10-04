import express  from 'express';
import cors from "cors";
import  miruta  from "./routes/rutas.routes.js";
import bd from "./bases/mibase.js";





const app = express();
app.use(cors());

app.use(express.json());
app.get('/', (req, res)=>{
    res.send('gracias por tanto sena');
})
 app.listen(3000,()=>{
    console.log('conectado http://localhost:3000/');
 })

 
 app.use('/aprendices',miruta);
 try{

 await bd.authenticate();
 console.log('conexion exitosa');
 }catch(err){
    console.error(err);
 }