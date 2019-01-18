import React from 'react';
import Button from '@material-ui/core/Button';


class singleSession extends React.Component {
    state = {
        hours: []
    }

    getHours = () => {
        return (
            this.setState({hours: this.props.sessions[0].time}),
            console.log(this.props.sessions)
        )
        
    }
    
    render() {
        return (
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onClick={ this.getHours }> {this.props.uniqueSession} </Button>
                <div>{this.state.hours}</div>
            </div>
        )
    }

    styleButton = () => {
        return {
            border: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '20px'
        }
    }

    

}



export default singleSession;