import React from 'react';



class Weather_info extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <p style={{color:'#363640'}}>Temperature Right Now:{parseFloat(this.props.valueFromParent.temp)}<sup>o</sup>c</p>
            <p>
                Max Temperature {(this.props.valueFromParent.temp_max)}<sup>o</sup>c
            </p>
                <p>
                    Min Temperature {this.props.valueFromParent.temp_min}<sup>o</sup>c
                </p>
            </div>
        )
    }
}




export default Weather_info;