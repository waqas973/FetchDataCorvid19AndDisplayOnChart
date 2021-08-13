import {Line} from 'react-chartjs-2';

function Chart({Countries,totalDeaths}) {

    return (
        <div className='chart' style={{position : 'relative' , width:'95vw',height:'100vh' }}>
           <Line data={{
    labels: Countries,
  datasets: [{
    label: 'Total Deaths',
    data: totalDeaths,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
}}  options = {{maintainAspectRatio : false, animation : {duration:2000, easing: 'easeInOutBounce'},
            layout : {
                padding: 30 
            },
           interaction : {interact : true , mode : 'nearest' } ,
           plugins : {
               title : {
                display : true,
                position: 'left',
                align : 'center',
                font: {size: 17, weight: 'bold'},
                padding: 10,
                   text : ' Deaths',
               },
               tooltip : {
                   
                },
               legend : {
                   align : 'center',
                   position:  'top',
                  
                   labels : {
                       color : 'black',
                        padding : 20,
                        font : { size : 17}
                   }
               }
           }      
        
        }} />
        </div>
    )
}

export default Chart
