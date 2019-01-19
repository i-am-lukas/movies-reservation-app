import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Hour extends React.Component {
    state = {
        seats: [],
        id: this.props.hour._id
    }
    
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onFocus={this.getId}> {this.props.hour.time} </Button>
            </div>
        )
    }

    getId = () => {
        this.props.seats(this.state.id)
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