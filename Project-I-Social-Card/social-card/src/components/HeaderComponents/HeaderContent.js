import React from 'react';

import HeaderTitle from './HeaderTitle'
import HeaderSubtitle from './HeaderSubtitle'
import ImageThumbnail from './ImageThumbnail'

import './Header.css';

const HeaderContent = () => {
    return (
    <div className="header-content">
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderSubtitle />
    <p className="headerP">Let's Learn react by building simple interfaces with
    components. Don't try to overthink it, just keep it simple and have fun.
    Once you feel comfortable using components you are well on your way to
    mastering react.</p>
    </div>
    );
};

export default HeaderContent;