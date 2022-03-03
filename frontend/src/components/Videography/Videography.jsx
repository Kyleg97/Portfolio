import VideoSlider from './VideoSlider';
import { SliderData } from './VideoSliderData';
import './videography.scss';

export default function Videography() {
    return (
        <div className='videography' id='videography'>
            <VideoSlider slides={SliderData}/>
        </div>
    )
}
