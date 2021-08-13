
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Chart from './Components/Chart';

function App() {
  const [Countries , setCountries] = useState([]);
  const [totalDeaths , settotalDeaths] = useState([]);
  const [isloading , setisloading] = useState(true);
  useEffect(()=>{
    const fetchData = async ()=>{
     const result = await axios.get('https://api.covid19api.com/summary');
     const data = result.data.Countries;
    let concetCountries ='' ;
    let concetCountryDeaths = [] ;
        data.map((val, i)=>{
         concetCountries += `${val.Country.concat(',')} `;
          concetCountryDeaths[i] = parseInt( `${val.TotalDeaths + ','} `);
          return '';
        })
        concetCountries =  concetCountries.split(',');
      setCountries(concetCountries);
      settotalDeaths(concetCountryDeaths);
      setisloading(false);
    } 
    fetchData();
  },[]);

  return (
    isloading ? <div style={{height:'100vh', width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
    <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='' />
    </div>   :  
    <>
    <div className="app">
        <h1>Fetching Data of Covid19 using Axios and display in chart</h1>
       <Chart Countries = {Countries} totalDeaths={totalDeaths} />
    </div>
    </>
  );
}

export default App;
