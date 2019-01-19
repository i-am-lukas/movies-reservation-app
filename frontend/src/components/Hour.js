import React from 'react';
import Button from '@material-ui/core/Button';

class Hour extends React.Component {
    state = {
        seats: [],
        id: this.props.hour._id,
        focused: false
    }
    
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onBlur={this.handleBlur} onFocus={this.getId}> {this.props.hour.time} </Button>
            </div>
        )
    }

handleBlur = () => {
    this.setState({focused:false})
}

    getId = () => {
        this.props.seats(this.state.id)
        this.setState({focused: true})
    }
    
    styleButton = () => {

        if(!this.state.focused)return {
            borderBottom: '2px black solid',
            borderLeft: '2px black solid',
            borderRight: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '2px'
        }

        else return {
            borderBottom: '2px black solid',
            borderLeft: '2px black solid',
            borderRight: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '0px',
            backgroundColor: '#8F2629'
        }
    }
}



export default Hour;