import React from 'react';
import '../scss/Work.scss';
import WorkCard from './WorkCard';
import pictures from './util/WorkPictures.js';
import ScrollToTop from './util/ScrollToTop.js';

export default function Work() {

    return (
        <main className="work-page">
            <h1 className="work-header">Work</h1>
            <div className="work-card-div">
                {pictures.map((item) => {
                    return <WorkCard picture={item} />
                })}
            </div>
            <ScrollToTop />
        </main>
    )
}
