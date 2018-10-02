import React from 'react';
import { hot } from 'react-hot-loader';
import Avatar from 'Presentational/Avatar';

class App extends React.Component {

    render() {
        const profileName = 'Carlos Lenon',
        photoUrl = 'https://avatars0.githubusercontent.com/u/4239218?s=400&u=f2778b9e2ca31ad43ff98c632f2e22e15ab46784&v=4',
        emails = {
            prof: 'dev@carloslenon.com',
            code: 'code@carloslenon.com',
        };
        // const { showProfileInfo, profileInfo } = this.props;

        return (
            <Avatar 
            name={profileName} 
            photoUrl={photoUrl} 
            profEmail={emails.prof} 
            codeEmail={emails.code} 
            showInfo={true} 
            info={'Javascript and God lover'} />
        );
    }
}

export default hot(module)(App);