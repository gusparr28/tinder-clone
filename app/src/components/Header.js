import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

import '../styles/header.css';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header-icon' />
            </IconButton>
            <img
                className='header-logo'
                src='https://geeksroom.com/wp-content/uploads/2019/06/tinder-logo-700x394.jpg'
                alt=''
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header-icon' />
            </IconButton>
        </div>
    );
};

export default Header;