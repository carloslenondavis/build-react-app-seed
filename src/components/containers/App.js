import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

    render() {
        const text = 'HRMsss';
        return (
            <div>
                <h1>Helloss Geekssss</h1>
                <p>Testing the { text }</p>
            </div>
        );
    }
}

export default hot(module)(App);