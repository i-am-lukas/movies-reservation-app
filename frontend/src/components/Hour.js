import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Hour extends React.Component {
    state = {
        seats: []
    }
    
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onFocus={this.props.seats}> {this.props.hour.time} </Button>
            </div>
        )
    }

    // getSeats = () => {
    //     // console.log(this.props.hour)
    //     axios.get(`http://localhost:4500/seats/${this.props.hour._id}`)
    //         // .then(res => console.log(res.data.session.seats))
    //         .then(res => this.setState({seats: res.data.session.seats }))
    //         .then(console.log(this.state.seats))
    // }
    
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