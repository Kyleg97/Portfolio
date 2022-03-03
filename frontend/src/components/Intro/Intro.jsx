import './intro.scss';

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/me4.png' alt='assets/photography/esther.png'/>
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h1>Kyle Gilbert</h1>
                    <h3>Undergraduate computer science student with</h3>
                    <h3>an expected graduation of Spring 2022.</h3>
                </div>
            </div>
        </div>
    )
}
