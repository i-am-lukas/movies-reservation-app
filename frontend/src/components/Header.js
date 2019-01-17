import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <div>.Coders<span style={{color: '#b73135',lineHeight: '92px' }}>Cinema</span></div>
        </header>
    )
}

const headerStyle = {
    color: 'white',
    fontSize: '92px',
    margin: '0',
    fontFamily: 'Teko, sans-serif',
    lineHeight: '92px',
    paddingTop: '25px',
    backgroundColor: 'rgba(3, 3, 3, 0.7)'

}

export default Header;