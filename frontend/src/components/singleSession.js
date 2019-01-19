import React from 'react';
import Button from '@material-ui/core/Button';
import Hour from './Hour';


class singleSession extends React.Component {
    state = {
        hours: [],
        clicked: false
        }
    
    buttonContainer = () => {
         return (
            this.props.styling,
            {margin: '0px'}
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

    handleClick = () => {
        return this.setState({clicked:true})
    }
    
    getHours = () => {
        if(this.state.clicked){
        let sorted = []
        let days = this.props.sessions.filter((arr)=> arr.date === this.props.uniqueSession);
        days.map((element)=>(sorted.push(element)))
        function compare(a, b) {
            const objA= a.time;
            const objB= b.time;
            let comparison = 0;
            if(objA > objB) {
                comparison = 1;
            } else if (objA < objB) {
                comparison = -1;
            }
            return comparison
        }
        sorted.sort(compare)
        return sorted.map((arrOfObj)=>(<Hour key={arrOfObj.time} hour={arrOfObj} seats={this.props.seats} sessions={this.props.sessions}/>))}
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} onClick={this.handleClick} > {this.props.uniqueSession} <i class="arrow-down"></i> </Button>
                <div style={this.buttonContainer()}> {this.getHours()} </div>
            </div>
        )
    }
    

    styleButton = () => { //date button
        return {
            border: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '20px 20px 0 20px'
        }
    }

    

}



export default singleSession;