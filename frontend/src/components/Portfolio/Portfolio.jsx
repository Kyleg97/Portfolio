import React from 'react';
import './portfolio.scss';
import Carousel from "react-elastic-carousel";
import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <Carousel className='carousel'>
                <div className='item'>
                    <header className='title'>
                        MarketHub
                    </header>
                    <div className='container'>
                        <div className='left-content'>
                            <p className='text'>A mobile application used for tracking which stock
                                tickers are currently being talked about, which are most popular, as well as
                                information for upcoming earnings and any tickers with unusual volume.</p>
                            <br />
                            <p className='text'>The app is cross-platform and supports iOS and Android. It
                                was created using Flutter and Dart, with the backend using Python and a Realtime
                                Database. The data is collected using a combination of Python web-scraping scripts
                                and API calls such as the Reddit and Stocktwits API.</p>
                        </div>
                        <div className='right-content'>
                            <img className='img' src='assets/MarketHub.png' alt='hi' />
                            <img className='img' src='assets/MarketHub.png' alt='hi' />
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <header className='title'>
                        Space Grapple
                    </header>
                    <div className='container'>
                        <div className='left-content'>
                            <p className='text'>A mobile application used for tracking which stock
                                tickers are currently being talked about, which are most popular, as well as
                                information for upcoming earnings and any tickers with unusual volume.</p>
                            <br />
                            <p className='text'>The app is cross-platform and supprots iOS and Android. It
                                was created using Flutter and Dart, with the backend using Python and a Realtime
                                Database. The data is collected using a combination of Python web-scraping scripts
                                and API calls such as the Reddit and Stocktwits API.</p>
                        </div>
                        <div>
                            <iframe className='game'
                                src="https://i.simmer.io/@kyleleesf/space-grapple">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <header className='title'>
                        MarketHub
                    </header>
                    <div className='container'>
                        <div className='left-content'>
                            <p className='text'>A mobile application used for tracking which stock
                                tickers are currently being talked about, which are most popular, as well as
                                information for upcoming earnings and any tickers with unusual volume.</p>
                            <br />
                            <p className='text'>The app is cross-platform and supprots iOS and Android. It
                                was created using Flutter and Dart, with the backend using Python and a Realtime
                                Database. The data is collected using a combination of Python web-scraping scripts
                                and API calls such as the Reddit and Stocktwits API.</p>
                        </div>
                        <div className='right-content'>
                            <img className='img' src='assets/MarketHub.png' alt='hi' />
                            <img className='img' src='assets/MarketHub.png' alt='hi' />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

{/*export default function Portfolio() {
    const child = { width: '100%', height: `100%`}
    return (
        <div className='portfolio' id='portfolio'>
            <HorizontalScroll>
                <div style={child}>
                    <div className='item bg'>
                        <h1>
                            Hello World
                        </h1>
                    </div>
                </div>

                <div style={child}>
                    <div className='item bg1'>
                        <h1>
                            Hello World
                        </h1>
                    </div>
                </div>

                <div style={child}>
                    <div className='item bg2'>
                        <h1>
                            Hello World
                        </h1>
                    </div>
                </div>

                <div style={child}>
                    <div className='item bg3'>
                        <h1>
                            Hello World
                        </h1>
                    </div>
                </div>
            </HorizontalScroll>
        </div>
    );
}*/}

{/*export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Mobile App</li>
                <li>Embedded Systems Robot Car</li>
                <li>Video Game</li>
                <li>Website</li>
            </ul>
            <div className='container'>
                <div className='item'>
                    <img src='assets/CREWLAB.png' alt=''/>
                </div>
            </div>
            
        </div>
    )
}*/}
