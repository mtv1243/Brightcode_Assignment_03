import React from 'react';

import './Styles.scss';

const LoadingLogo = (props) => {

    let isActive = (props.loadingActive) ? " loadingLogoActive" : ""; 

    return(
        <img src="/assets/loadingLogo.png" alt="loading logo" className={"loadingLogo" + isActive}></img>
    )
}

export default LoadingLogo;