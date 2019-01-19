import React from 'react';
import SingleSession from './singleSession';


class Sessions extends React.Component {
    
    render() {
        return (
            <div style={{ flexBasis: '90%'}} >
                <div style={this.buttonContainer()}>{this.mapIt()}</div>
            </div>
        )
    }

    buttonContainer = () => {
        return this.props.styling
    }
    

    mapIt = () => {
        var uniqueSessions = [];
        var mySet = new Set();
        const toArray = Object.values(this.props.sessions)
        toArray.map((session)=> (mySet.add(session.date)));
        uniqueSessions = Array.from(mySet).sort();
        return uniqueSessions.map((uniqueSession) => (
            <SingleSession key={uniqueSession} uniqueSession={uniqueSession} sessions={this.props.sessions} seats={this.props.seats} withIds={toArray}/>
        ))
    }
    
}

export default Sessions;