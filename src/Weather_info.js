import React from 'react';



class Weather_info extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <p style={{color:'#363640'}}>Temperature Right Now:{parseFloat(this.props.valueFromParent.temp)}</p>
            <p>
                Max Temperature {parseFloat(this.props.valueFromParent.temp_max)}
            </p>
                <p>
                    Min Temperature {this.props.valueFromParent.temp_min}
                </p>
            </div>
        )
    }
}




export default Weather_info;