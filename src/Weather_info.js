import React from 'react';

import './weather_tab.css';


class Weather_info extends React.Component{
    constructor(props){
        super(props);
        var date = new Date();
        this.date_rn= date.getTime();
         this.curr_date = new Date(this.date_rn);
        this.curr_date = this.curr_date.toString();
        
    }


    render(){
        this.iconcode = this.props.valueFromParent.icon_code;
        console.log(this.iconcode);
        this.iconUrl = "http://openweathermap.org/img/w/" +this.iconcode+".png";
        if(this.props.valueFromParent.show){
        return(
            <div class="infoTab" style={{border:'2px solid grey'}}>
            <h5>{this.props.valueFromParent.current_city}</h5>
            <h6>{this.curr_date}</h6>
            <div id="icon"><img id="wicon" src={this.iconUrl} alt="Weather icon" /> </div>

            <p style={{color:'#363640'}}>Temperature Right Now: {parseInt(this.props.valueFromParent.temp)}<sup>o</sup>c</p>
            <p>
                Max Temperature: {parseInt(this.props.valueFromParent.temp_max)}<sup>o</sup>c
            </p>
                <p>
                    Min Temperature: {parseInt(this.props.valueFromParent.temp_min)}<sup>o</sup>c
                </p>
                

                
            </div>
        )
       
        }

        else{
            return(
                <div>
                    
                </div>
            )
        }
    }
}




export default Weather_info;