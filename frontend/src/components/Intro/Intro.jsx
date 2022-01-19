import './intro.scss';

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/me.png' alt=''/>
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Seasons Greetings, I'm</h2>
                    <h1>Kyle Gilbert</h1>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}
