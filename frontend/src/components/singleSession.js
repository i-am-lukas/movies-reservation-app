import React from 'react';
import Button from '@material-ui/core/Button';


class singleSession extends React.Component {
    render() {
        return (
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onClick={ this.getHours}> {this.props.session.date} </Button>
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

    getHours = () => {
        return (
            <div>Hello</div>
        )
        
    }
}



export default singleSession;