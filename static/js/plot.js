// d3.json("/County").then(countyData => {
//     console.log(countyData)
  
    // var names = Object.values(sampleData)[0];
    // console.log(names);
  
    // var metadata = Object.values(sampleData)[1];
    // console.log(metadata);
  
    // var samples = Object.values(sampleData)[2];
    // console.log(samples);
    // });

// function unpack(rows, index) {
//     return rows.map(function(row) {
//         return row[index];
//     });
// }  
  
// function getCountyData() {

//     var file = 'organic_markets.json';
//     d3.json(file).then(function(data) {
//       var dates = unpack(data.dataset.data, 0);
//       var openPrices = unpack(data.dataset.data, 1);
//       var highPrices = unpack(data.dataset.data, 2);
//       var lowPrices = unpack(data.dataset.data, 3);
//       var closingPrices = unpack(data.dataset.data, 4);
//       var volume = unpack(data.dataset.data, 5);
//       buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
//     });
//   }
function plotData() {

    d3.json("/County", function(countyData) {
      console.log(countyData)
  
        //filter sample values by id
        // var name = countyData.county_name;
  
        //values for the bar chart
        // var households = countyData.county_name;
  
        // var id_values = samples.otu_ids.slice(0, 10);
  
        // //labels for the bar chart
        // var otu_ids = id_values.map(d => "OTU" + d);
  
        //hovertext for the chart
        // var labels = samples.otu_labels;
  
        // console.log(`County Name: ${name}`);
        // console.log(`Total Households: ${households}`);

    });
}
  
plotData(); 
        //========= 
        //  PLOT
        //=========
  
//         //create trace for bar chart
//         var traceBar = {
//           x: sample_values,
//           y: otu_ids,
//           text: labels,
//           type: "bar",
//           orientation: "h"
//         };
  
//         //create data 
//         var data = [traceBar];
  
//         //create layout for bar chart
//         var layout = {
//           title: "Top 10 OTU",
//           yaxis:{
//             tickmode:"linear"
//           },
//           margin: {
//             l: 100, 
//             r: 100, 
//             t: 30, 
//             b: 20
//           }
//         };
  
//         Plotly.newPlot("bar", data, layout);
  
//         //create trace for the bubble chart
//         var traceBubble = {
//           x: samples.otu_ids, 
//           y: samples.sample_values,
//           mode: "markers", 
//           marker: {
//             size: samples.sample_values, 
//             color: samples.otu_ids
//           }, 
//           text: samples.otu_labels
//         };
  
//         //create data
//         var data1 = [traceBubble];
  
//         //set layout for the bubble plot
//         var layout1 = {
//           title: "OTU ID", 
//           height: 500, 
//           width: 1300
//         };
  
//         Plotly.newPlot("bubble", data1, layout1);
  
//         //create gauge chart
//         var traceGauge = {
//           domain: { x: [0, 1], y: [0, 1] },
//           value: sample_values, 
//           type: "indicator",
//           mode: "gauge+number"
//         }
  
//         //create data
//         var data2 = [traceGauge];
  
//         var layout2 = {
//           width: 500, 
//           height: 500, 
//           margin: {
//             t: 0, 
//             b: 0
//           }
//         };
  
//         Plotly.newPlot("gauge", data2, layout2);
//     });
//   }