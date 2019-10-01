import React, { Component } from 'react';
import User from './Users'
import photo from './img/user.png'

class Diogo extends Component {
    render(){
        return(
            <div>
                Eu sou um component chamado Diogo.
                <User name="Diogo" photo={photo}/>
            </div>
        );
    }
}

export default Diogo;
