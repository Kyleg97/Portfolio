import ImageSlider from './ImageSlider';
import { SliderData } from './PhotoSliderData';
import './photography.scss';

export default function Photography() {
    return (
        <div className='photography' id='photography'>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}
