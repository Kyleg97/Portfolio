import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>hello</a>
                    <a href='#experience' className='logo'>experience</a>
                    <a href='#photography' className='logo'>photography</a>
                    <a href='#portfolio' className='logo'>portfolio</a>
                    <a href='#contact' className='logo'>contact</a>
                </div>
                <div className='right'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <a href="https://github.com/Kyleg97"> <i class="fa fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/kylelg/"> <i class="fa fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
}

function oldNavbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <div className='links'>
                    <a href='/home'>Home</a>
                    <a href='/contact'>Contact</a>
                    <a href='/photography'>Photography</a>
                    <a href='/projects'>Projects</a>
                </div>
            </div>
            <div className='rightSide'>
                <div className='buttons'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <a href="https://github.com/Kyleg97"> <i class="fa fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/kylelg/"> <i class="fa fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar