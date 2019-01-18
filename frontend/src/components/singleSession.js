import React from 'react';
import Button from '@material-ui/core/Button';
import Hour from './Hour';


class singleSession extends React.Component {
    state = {
        hours: [],
        clicked: false
    }
    
    buttonContainer = () => {
         return this.props.styling
    }
    
    styleButton = () => {
        return {
            border: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '20px'
        }
    }

    handleClick = () => {
        return this.setState({clicked:true})
    }
    
    getHours = () => {
        if(this.state.clicked){
        var toArray = Object.values(this.props.sessions)
        var days = this.props.sessions.filter((toArray)=> toArray.date === this.props.uniqueSession);
        return days.map((hour)=>(<Hour key={hour.time} hour={hour.time}/>))}
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onClick={this.handleClick}> {this.props.uniqueSession} </Button>
                <div style={this.buttonContainer()}> {this.getHours()} </div>
            </div>
        )
    }
    

    

}



export default singleSession;