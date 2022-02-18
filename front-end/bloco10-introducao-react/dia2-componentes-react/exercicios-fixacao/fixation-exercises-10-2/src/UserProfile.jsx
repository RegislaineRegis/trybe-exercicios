import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {    
    render(){    
           return (
            <div>
                <p> Id: {this.props.user.id}</p>
                <p> Name: {this.props.user.name}</p>
                <p> E-mail: {this.props.user.email}</p>
                <Image source={this.props.user.avatar} alternativeText="User avatar" />
            </div>
        )
    }
}

export default UserProfile;
