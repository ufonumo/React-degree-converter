import React, { Component } from "react";

class Converter extends Component {

    constructor(props){
        super(props)

        this.state = {
            degreeLatitude:'',
            minuteLatitude:'',
            secondLatitude:'',
            resultLatitude:'',

            degreeLongitude:'',
            minuteLongitude:'',
            secondLongitude:'',
            resultLongitude:''
        }
    }

    handleDegreeLatitude = (event) =>{
        this.setState({
            degreeLatitude: event.target.value
        })
    };

    handleMinuteLatitude = (event)=>{
        this.setState({
            minuteLatitude: event.target.value 
            
        })
    };

    handleSecondLatitude = (event)=>{
        this.setState({
            secondLatitude: event.target.value
        })
    };

    handleDegreeLongitude = (event) =>{
        this.setState({
            degreeLongitude: event.target.value
        })
    }

    handleMinuteLongitude = (event) =>{
        this.setState({
            minuteLongitude: event.target.value
        })
    }

    handleSecondLongitude = (event) =>{
        this.setState({
            secondLongitude: event.target.value
        })
    }


    calculateLatitude = () =>{

       let minLat = this.state.minuteLatitude / 60;
       let secLat = this.state.secondLatitude / 3600;

       let minLong = this.state.minuteLongitude / 60;
       let secLong =  this.state.secondLongitude / 3600;


        let longMinSecond = minLong + secLong;
       let latMinSeconds = minLat + secLat;
      
       this.setState({
        resultLatitude: Math.round(this.state.degreeLatitude) + latMinSeconds,
        resultLongitude: Math.round(this.state.degreeLongitude) + longMinSecond
       })
    }
 
    render(){
       
    return(

        <div className="container" >
            <form id="app_form">
                <div className="latitude">
                    <label htmlFor="degree_lat">Enter Degrees, Minutes and Seconds for Latitude</label>
                    <input type="number" value={this.state.degreeLatitude} onChange={this.handleDegreeLatitude} id="degree_lat" placeholder="Degrees"/>
                    <input type="number" value={this.state.minuteLatitude} onChange={this.handleMinuteLatitude} placeholder="Minutes"/>
                    <input type="number" value={this.state.secondLatitude} onChange={this.handleSecondLatitude} placeholder="Seconds"/>
                </div>

                <div className="longitude">
                    <label htmlFor="degree_long">Enter Degrees, Minutes and Seconds for Longitude</label>
                    <input type="number" value={this.state.degreeLongitude} onChange={this.handleDegreeLongitude} id="degree_long" placeholder="Degrees"/>
                    <input type="number" value={this.state.minuteLongitude} onChange={this.handleMinuteLongitude}  placeholder="Minutes"/>
                    <input type="number" value={this.state.secondLongitude} onChange={this.handleSecondLongitude} placeholder="Seconds"/>
                </div>
            
                <div className="btn">
                    <input type="button" onClick={this.calculateLatitude} value="Convert to Degrees"/>
                    <input type="submit" value="Clear Values"/>
                </div>

                <div className="results">
                    <h4 className="text-center">Results</h4> 
                    <label hmtlfor="results_lat">Latitude:</label>
                    <input type="text" id="results_lat" value={this.state.resultLatitude} onChange={this.calculateLatitude}  placeholder="Latitude" readOnly/>
                    <label hmtlfor="results_long">Longitude:</label>
                    <input type="text" id="results_long" value={this.state.resultLongitude} onChange={this.calculateLatitude} placeholder="Longitude" readOnly/>
                </div>
            </form>

          
        </div>
            
    )
    }
}


export default Converter;