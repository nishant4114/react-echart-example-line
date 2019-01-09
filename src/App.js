import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './App.css';

class App extends Component {
  getOption = () => {
    return {
      title: {
        text: 'Transport Agency records'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['Maruti Suzuki','Hyundai','Honda']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value} km'
        }
        }
      ],
      series : [
        {
          name:'Maruti Suzuki',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'Hyundai',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'Honda',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };
  render() {
    return (
      <div className="App">
      <h1>Simple line chart</h1>
         <ReactEcharts
            option={this.getOption()}
            style={{height: '350px', width: '50%', left:'25%'}}
            className='react_for_echarts' />
      </div>
    );
  }
}

export default App;
