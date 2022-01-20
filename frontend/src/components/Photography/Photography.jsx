import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './photography.scss';

export default function Photography() {
    return (
        <div className='photography' id='photography'>
            <ImageSlider slides={SliderData}/>
        </div>
    )
}
