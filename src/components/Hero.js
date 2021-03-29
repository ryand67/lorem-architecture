import React from 'react';
import '../scss/Hero.scss';
import photo1 from '../assets/building1.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <img src={photo1} alt="" className="hero-img"/>
            <div className="left-div">
                <h1 className="hero-header">Lorem<br/> Architecture</h1>
                <p className="hero-desc">We make your architectural dreams a reality.</p>
            </div>
        </section>
    )
}
