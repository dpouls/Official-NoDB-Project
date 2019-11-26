import React, {Component} from 'react'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
library.add(faPaw);

class Header extends Component{
    render (){
        return (
            <header id ="forsale"><FontAwesomeIcon icon="paw" id='paw'/> PUPPIES FOR SALE <FontAwesomeIcon icon="paw" id='paw'/> </header>
        )
    }
}
export default Header