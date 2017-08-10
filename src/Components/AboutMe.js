import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutMe extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
    const headerElem = document.querySelector('.header-container');
    const aboutMeElem = document.querySelector('.aboutMe-container');
    const heightOfHeader = headerElem.offsetHeight;
    aboutMeElem.style.paddingTop = heightOfHeader + 'px';
  }

  render() {
    return(
      <section className='aboutMe-container'>

        <div className='aboutMe-content'>

          <div className='aboutMe-div aboutMe-summary-container'>
            <div className='aboutMe-summary-header'>
              <img className='aboutMe-profilePic' src={require('../images/prof-pic.jpg')} alt='anders wood'/>
              <div className='aboutMe-titles'>
                <h3>Front-End Developer</h3>
                <h3>Mech. Engineer</h3>
                <h3>Adventurer</h3>
              </div>
            </div>
            <p className='aboutMe-summary'>I am a front-end developer pivoting from 7 years of mechanical engineering work in wind turbine design and energy consulting. I want to leverage my technical and artistic skillsets to design and create amazing front-end pages and apps that affect sustainability and social good. I'm a passionate and driven problem solver, at home in the mountains navigating backcountry challenges and in front of my editor debugging a redux app. </p>
          </div>

          <div className='aboutMe-div aboutMe-projects-container'>
            <h1 className='aboutMe-header'>PROJECTS</h1>
            <Link to='/' className='aboutMe-linkHome'>
              <h4>Click Here</h4>
            </Link>
          </div>

          <div className='aboutMe-div aboutMe-education-container'>
            <h1 className='aboutMe-header'>EDUCATION</h1>
            <div className='education-div'>
              <h4>Turing School of Software & Design</h4>
              <h5>Front-End Development</h5>
            </div>
            <div className='education-div'>
              <h4>Georgia Institute of Technology</h4>
              <h5>M.S. Mechanical Engineering</h5>
            </div>
            <div className='education-div'>
              <h4>Dartmouth College</h4>
              <h5>B.E. Engineering Sciences</h5>
            </div>
            <div className='education-div'>
              <h4>Colby College</h4>
              <h5>B.A. Physics, Studio Art</h5>
            </div>
          </div>

          <div className='aboutMe-div aboutMe-progskills-container'>
            <h1 className='aboutMe-header'>PROGRAMMING SKILLS</h1>
            <div className='aboutMe-progskills'>
              <h4>JavaScript</h4>
              <h4>CSS3/SCSS</h4>
              <h4>HTML5</h4>
              <h4>React.js</h4>
              <h4>Redux.js</h4>
              <h4>TDD</h4>
              <h4>Node.js</h4>
              <h4>Responsive Design</h4>
              <h4>Sketch</h4>
              <h4>Enzyme</h4>
              <h4>Jest</h4>
              <h4>Google Maps API</h4>
              <h4>jQuery</h4>
              <h4>Express</h4>
              <h4>PostreSQL</h4>
              <h4>Mocha</h4>
              <h4>Chai</h4>
            </div>
          </div>

          <div className='aboutMe-div aboutMe-lifeskills-container'>
            <h1 className='aboutMe-header'>LIFE SKILLS</h1>
            <div className='aboutMe-wrapper'>
              <div className='aboutMe-lifeskills-left'>
                <h3>Skiing</h3>
                <h4>Division I nordic skiing at Colby College & Dartmouth College</h4>
                <h4>Backcountry skiing & mountaineering</h4>
                <h3>Outdoors</h3>
                <h4>Camping, ultra-running, hiking, climbing, cycling</h4>
              </div>
              <div className='aboutMe-lifeskills-right'>
                <h3 className='aboutMe-certifications'>Certifications</h3>
                <h4>6-Sigma DMAIC and DFSS</h4>
                <h4>Engineer in Training</h4>
                <h4>Certified Energy Manager</h4>
              </div>
            </div>
          </div>

          <div className='aboutMe-div aboutMe-contact-container'>
            <h1 className='aboutMe-header'>CONTACT ME</h1>
            <h4>anderswood at gmail dot com</h4>
          </div>
        </div>

      </section>
    )
  }
}

export default AboutMe;
