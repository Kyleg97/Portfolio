import React, { useState, Component } from 'react';
import { SliderData } from './ImageSliderData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './imageslider.scss';

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return <div>
        <section className='slider'>
            <FaAngleLeft className='left-arrow' black onClick={prevSlide}/>
            <FaAngleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='image' className='image' />)}
                    </div>
                )
            })}
        </section>
        <div className='info'>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (<h3 className='location'>{slide.location}</h3>)}
                    </div>
                );
            })}
        </div>
    </div>;
}

/*export default function ImageSlider() {
        return (
            <Carousel>
                <div>
                    <img src="assets/photography/esther.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/photography/esther2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/photography/marth.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
};*/