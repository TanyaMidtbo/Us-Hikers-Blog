import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config(); //initialize dotenv
const app = express(); //initialize server
const PORT = 4000; //port number localhost
const {API_KEY} = process.env; //API_KEY

app.use(cors()); //middleware

app. listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", async (req, res) => { //refers to the root URL path of the web application because of /
	try{
		const response = await fetch('', { //https://meteostat.p.rapidapi.com/point/monthly?lat=52.5244&lon=13.4105&start=2020-01-01&end=2020-12-31&alt=43
			method: 'GET',
			headers: {
			  'X-RapidAPI-Key': {API_KEY},
			  'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
			}
		  });
		  const data = await response.json();
		  res.json(data);
	} catch(error) {
		console.log(error);
	}

});




