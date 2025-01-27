// import express frameworkl
const express = require("express");

const PORT = 1018;

const app = express();

const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

server()

app.listen(PORT, ()=>{
    console.log(`App is listening to PORT:${PORT}`)
})

