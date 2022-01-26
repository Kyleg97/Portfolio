import './experience.scss';

export default function Experience() {
    return <div className='experience' id='experience'>
        <div className='section'>
            <div className="wrapper">
                <div className='logo'>
                    <img src='assets/DARRIGO.png' alt='' width={200} height={100} />
                </div>
                <h1>Software Developer Intern</h1>
                <strong><i>D'Arrigo Brothers - Salinas, California</i></strong>
                <p>&bull; Worked closely with the shipping and IT departments to create a check-in application that
                    safely separated D’Arrigo employees from their customers during the COVID-19 pandemic, and
                    helped determine which customers load and transport which orders. The application frontend
                    was built using <b>Android Studio</b> and <b>Java</b>.</p>
                <p>&bull; Rewrote an existing iOS application using <b>Dart</b> and <b>Flutter</b> for cross-platform use that
                    allowed D’Arrigo employees to keep track of which locations had been harvested, what
                    commodity had been harvested, and when.</p>
                <p>&bull; Created and updated documentation for maintaining the codebase, specifically
                    flowcharts for application logic and spreadsheets for covered tests.</p>
            </div>
        </div>
        <div className='section'>
            <div className="wrapper">
                <div className='logo'>
                    <img src='assets/CREWLAB.png' alt='' width={200} height={100} />
                </div>
                <h1>Software Engineer Intern</h1>
                <strong><i>CrewLAB - Remote</i></strong>
                <p>&bull; Worked in a team of seven remotely to create a cross-platform mobile application to help collegiate
                    level athletes log their workouts via camera scanning or manual input.</p>
                <p>&bull; Followed <b>Scrum</b> methodology practices by having daily standups with two week sprints, along
                    with meetings to plan and review these sprints.</p>
                <p>&bull; Responsible for completing user stories in both frontend, using <b>Dart</b> and <b>Flutter</b>, as
                    well as backend using <b>Typescript</b>, <b>Express</b>, and <b>Typeorm</b> with a <b>MySQL database</b>.</p>
                <p>&bull; Implemented CD for the frontend codebase using <b>codemagic</b>, enabling automated deployments to
                    iOS and Android.</p>
            </div>
        </div>
        <div className='section'>
            <div className="wrapper">
                <div className='logo'>
                    <img src='assets/SFSU.png' alt='' width={375} height={100} />
                </div>
                <h1>Research Assistant</h1>
                <strong><i>San Francisco State University - Remote</i></strong>
                <p>&bull; Research focused on Android obfuscation, specifically as protection against reverse engineering.</p>
                <p>&bull; Assisted the professor in collecting and reading research papers related to the area of study.</p>
                <p>&bull; Determine specific cases where default Android (ProGuard) obfuscation rules will crash the
                    application or cause runtime errors, and how to fix or avoid these cases.</p>
            </div>
        </div>
        <div className='section'>
            <div className='wrapper'>
                <div className='logo'>
                    <img src='assets/RCP.png' alt='' width={100} height={100} />
                </div>
                <h1>Guest Services Representative</h1>
                <strong><i>Redwood Christian Park - Boulder Creek, California</i></strong>
                <p>&bull; Utilized consistent verbal and written communication skills to assist guests with their questions
                    and improve the overall guest experience.</p>
                <p>&bull; Worked independently to keep facility amenities clean and maintained, and locked the conference
                    facilities daily.</p>
            </div>
        </div>
    </div>
}
