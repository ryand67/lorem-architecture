import React from 'react';
import '../scss/About.scss';
import photo1 from '../assets/building2.jpg';
import photo2 from '../assets/building3.jpg';

export default function About() {
    return (
        <main className="about">
            <h1 className="about-header">ABOUT</h1>
            <div className="about-top-div">
                <div className="text-div">
                    <h1 className="about-title">Lorem Architecture</h1>
                    <p className="about-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates minima sed facere? Saepe molestias quaerat laboriosam eius magni tempora tempore sapiente beatae excepturi quidem minima quo rerum enim vel, voluptates, dicta iusto quia quasi nam. Vero quisquam voluptatibus delectus sunt nihil consequuntur quaerat natus id aliquam, illum vel dolore.</p>
                </div>
                <img src={photo1} className="about-img-1" alt=''/>
            </div>

            <div className="about-second-div">
                <img src={photo2} className="about-img-2" alt=''/>
                <div className="text-div">
                    <h1 className="about-title">What We Can Do For You</h1>
                    <p className="about-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae beatae, eius, voluptates consequatur maxime sapiente sint tenetur temporibus totam, optio quae recusandae autem expedita corrupti nobis! Esse recusandae inventore cupiditate!</p>
                </div>
            </div>
        </main>
    )
}
