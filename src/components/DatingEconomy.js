// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Papa from "papaparse";

// // import { Slider } from '@nextui-org/react';
// // import {Button} from '@nextui-org/button'; 
// // import { cn } from "@/lib/utils";


// const DatingEconomy = (props) => {

// return (
// <FetchCSVData />
// )

//     }


//     const FetchCSVData = () => {
//         const [csvData, setCsvData] = useState([]);
    
//         useEffect(() => {
//             fetchCSVData();    // Fetch the CSV data when the component mounts
//         }, []); // The empty array ensures that this effect runs only once, like componentDidMount
    
//         const fetchCSVData = () => {
//         const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpv7UUr6qtM7jktt5xWw4jafylhYZeoG6SZgo3kc21mvWNNqgKNsMMlwSiZXZ2vq9oh0qXYk7rqUvb/pub?gid=1845772824&single=true&output=csv'; // Replace with your Google Sheets CSV file URL
    
//             axios.get(csvUrl)    // Use Axios to fetch the CSV data
//                 .then((response) => {
//                     const papaParsedData = Papa.parse(response.data, {
//                         header: true,
//                         skipEmptyLines: true,
//                       });
//                       console.log(papaParsedData.data);
//                       const parsedCsvDataTemp = papaParsedData.data;        // Parse the CSV data into an array of objects
//                       const parsedCsvData = parsedCsvDataTemp.map(row => <li>{row.age}, {row.total_count}, {row.male_count}, {row.female_count}</li>);
//                     //   setCsvData(parsedCsvData);
//                         const Component = () => 
//                         <div className="DatingEconomy">
//                         <Slider 
//       label="Temperature"
//       size="lg"
//       step={1} 
//       maxValue={10} 
//       minValue={0} 
//       defaultValue={4}
//       className="max-w-md"
//       color="{color}"
//     />
//                                 </div>
//                         setCsvData(Component);





                        

//                     })
//                 .catch((error) => {
//                     console.error('Error fetching CSV data:', error);
//                 });
//         }


//         return csvData;
    
//     }



// export default DatingEconomy;