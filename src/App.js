

import React from 'react';
import './App.css';
import axios from 'axios';
import Weather_info from './Weather_info';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "temp":'',
      "temp_min":'',
      "temp_max":''
    };

    this.Btn_Click=this.Btn_Click.bind(this);
    this.checkState = this.checkState.bind(this);

  }

  Btn_Click(self){
    
    var self = this;
    this.resp_data={};
    this.query  = document.getElementById("city_name").value;
    console.log(this.query);
    const api_key = "6b64ff8a23abcdc31e1038fdd1f047d3";

    this.url ="http://api.openweathermap.org/data/2.5/weather?q="+this.query+"&appid="+api_key;
    console.log(this.url);
    axios({
      method: 'get',
      url: this.url
    })
    .then(function(response){
       
       self.setState({
         "temp":parseFloat(response.data.main["temp"])-273.15,
         "temp_max": parseFloat(response.data.main["temp_max"])-273.15,
         "temp_min":parseFloat(response.data.main["temp_min"])-273.15
       });
       console.log(self.state);
    })

    

  }

 checkState(self){
   console.log(this.state);
 }



  render(){
    return(
      <div class="main_grid"> 
      <div class="main_box" class="container">
        
        <div class="input-field row s4">
          <input id="city_name" type="text" class="validate" />
          <label for="city_name">Enter the name of the city</label>
        </div>
        <button class="waves-effect  btn-small" onClick={this.Btn_Click}>Search</button>
        <button onClick={this.checkState}>Check State</button>
        <Weather_info valueFromParent={this.state} >
          
        
            
          

          </Weather_info>

      </div>
      </div>


    );
  }
}

export default App;
