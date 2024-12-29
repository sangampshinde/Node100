// import express from 'express';

// const app = express();

// const PORT = 5000;


// app.get('/',(req,res)=>{
//     res.send('Hello world!');
// })

// app.listen(PORT,()=>{
//     console.log('server started');
// })

// ============================================
// Environment Variables: Access environment variables in Node.js.

// import dotenv from "dotenv"
// dotenv.config();


// const nodeEnv = process.env.NODE_ENV
// const port = process.env.PORT
// const databaseUrl=process.env.DATABASE_URL
// const secretKey = process.env.SECRET_KEY


// console.log(`Environment: ${nodeEnv}`);

// console.log(`Server will run on port: ${port}`);

// console.log(`Database URL: ${databaseUrl}`);

// console.log(`Secret Key: ${secretKey}`);


// =======================================================================
// Read File (fs Module): Use the fs module to read a text file and display its content in the console.

// import fs from 'fs';

// const filePath = 'example.txt';

// fs.readFile(filePath,'utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data); 
//     }
// });

// ========================================================================================
// Write File (fs Module): Write a string to a file using the fs module.

// import fs from 'fs';

// const data = "Hello, this is a string written to a file!";

// const filePath = "output.txt";

// fs.writeFile(filePath,data,(error)=>{
//     if(error){
//         console.error("Error writing to file:", error);
//     }else{
//         console.log('Data written to file successfully!');
//     }
// });

// =========================================================================================
// Append File: Append data to a file in Node.js.

// import fs from 'fs'

// const data = "append data";

// const file = "append.txt";

// fs.appendFile(file,data,(error)=>{
//     if(error){
//         console.error(error);
//     }else{
//         console.log('sucess to append data');
//     }
// });

// =========================================================================================
//Delete File: Write a script to delete a file from the file system.

//NOTE:to test this program first create delete.txt


// import fs from "fs";

// const file = "delete.txt";

// fs.unlink(file,(error)=>{
// if(error){
//     console.error(error);
// }else{
//     console.log("sucess");
// }
// });






