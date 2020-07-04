import React from 'react';
import Sidebar from './components/app/Sidebar/Sidebar';
import Body from './components/app/Body/Body';

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Body />
        </div>
    );
}

export default App;