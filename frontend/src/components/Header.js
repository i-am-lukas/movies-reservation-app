import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Header</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#2b2b2b',
    color: 'white',
    border: 'white 1px solid'
}

export default Header;