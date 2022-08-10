const { default: axios } = require("axios");
const getMovies= async ( req,res )=>{
    try {
        const apiData= await axios.get(`http://www.omdbapi.com/?t=${ req.query.title }&y=${ req.query.year }&type=${ req.query.type }&apikey=32b0c60c`);
        console.log(`http://www.omdbapi.com/?t=${ req.query.title }&y=${ req.query.year }&type=${ req.query.type }&apikey=32b0c60c`);
        res.json( {
            "data": apiData.data,
            "status": 200,
        } )
    } catch (err) {
        res.json(
            {
                "status": 500,
                "message":"something went wrong"
            }
        )
    }
}
module.exports={
    getMovies
}