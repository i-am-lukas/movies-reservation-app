import React from 'react';
import Button from '@material-ui/core/Button';

class Hour extends React.Component {
    state = {
        seats: []
    }
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onFocus={this.logThat}> {this.props.hour.time} </Button>
            </div>
        )
    }

    logThat = () => {
        console.log(this.props.hour)
    }

    getSeats = () => {
        console.log(this.props.sessions)
        // axios.get('')
        // return  this.setState({seats: [] }) (console.log(this.state.seats))
        
    }
    
    styleButton = () => {
        return {
            borderBottom: '2px black solid',
            borderLeft: '2px black solid',
            borderRight: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '0px'
        }
    }
}



export default Hour;