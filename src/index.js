// ## Ejercicio 1
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const getQuater= ( month )=>{
//     if( month === 1 || month === 2 || month === 3   ){
//         return 1;
//     }
//     if( month === 4 || month === 5 || month === 6   ){
//         return 2;
//     }
//     if( month === 7 || month === 8 || month === 9   ){
//         return 3;
//     }
//     return 4;
// }   
// console.log( getQuater(8) );

// ## Segundo ejercicio

// Comunicación con API, buscar películas por título, y año, y tipo usando open movie, se solicita

// Devolver mensaje en el siguientes formato
// {
// 	"data": apiData,
// 	"status": 200,
// },
// {
// "status": 500,
//   "message": "something went wrong"
// }
// http://www.omdbapi.com/?i=tt3896198&apikey=32b0c60c

const express = require('express');
const app = express();

app.use( express.json() );
app.use( '/', require('./routes/routes') );

app.listen( 3000, ()=>{
    console.log(' server is runing on http://localhost:3000 ')
} );