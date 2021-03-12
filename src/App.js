

import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "temp":'',
      "temp_min":'',
      "temp_max":''
    };

    this.Btn_Click=this.Btn_Click.bind(this);

  }

  Btn_Click(self){
    console.log("I am clicking the button");
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
      </div>
      </div>


    );
  }
}

export default App;
