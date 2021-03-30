import React from 'react';
import '../scss/WorkCard.scss';

export default function WorkCard(props) {

    console.log(props);
    return (
        <div className="work-card" style={{backgroundImage: `url(${props.picture})`}}>
            
        </div>
    )
}
