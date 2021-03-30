import React from 'react';
import '../util/scroll.scss';

export default function ScrollToTop() {

    const click = () => {
        window['scrollTo']({top: 0, behavior: 'smooth'})
    }

    return (
        <div className="scroll-to-top" onClick={click}>
            <i className="fas fa-angle-up"></i>
        </div>
    )
}
