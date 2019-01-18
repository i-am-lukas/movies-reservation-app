import React from 'react';
import Button from '@material-ui/core/Button';

class Hour extends React.Component {
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onClick={ this.getHours }> {this.props.hour} </Button>
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



export default Hour;