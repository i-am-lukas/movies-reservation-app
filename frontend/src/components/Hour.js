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
                <Button variant="outlined" color="default" style={this.styleButton()} onFocus={this.getId} onBlur={this.unFocus}> {this.props.hour.time} </Button>
            </div>
        )
    }

    handleBlur = () => {
        this.setState({focused:false})
    }

    getId = () => {
        console.log(this.state.id)
        this.props.seats(this.state.id)
        this.setState({focused: true, id: this.props.hour._id})
    }

    unFocus = () => {
        this.setState({focused: false})
    }
    
    styleButton = () => {

        if (!this.state.focused) return {
            border: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '2px'
        }

        else return {
            border: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '2px',
            backgroundColor: '#8F2629'
        }
    }
}



export default Hour;