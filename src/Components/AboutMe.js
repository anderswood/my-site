import React from 'react';

export const AboutMe = () => {
  return(
    <section className='aboutMe-container'>
      <div className='aboutMe-content'>
        <img src='../images/profile-pic_20170420-min.jpg' alt='profile'/>
        <h2>Anders Wood</h2>
        <h4>anderswood at gmail dot com</h4>

        <p>I am a front-end developer pivoting from 7 years of mechanical engineering work in wind turbine design and energy consulting. I want to leverage my technical and artistic skillsets to design and create amazing front-end pages and apps that affect sustainability and social good. I'm a passionate and driven problem solver, at home in the mountains navigating backcountry challenges and in front of my editor debugging a redux app. </p>

        <h3 className='aboutMe-projects'>Projects</h3>

        <h3 className='aboutMe-education'>Education</h3>
          <h4>Turing School of Software & Design</h4>
            <h5>Front-End Development</h5>
          <h4>Georgia Institute of Technology</h4>
            <h5>M.S. Mechanical Engineering</h5>
          <h4>Dartmouth College</h4>
            <h5>B.E. Engineering Sciences</h5>
          <h4>Colby College</h4>
            <h5>B.A. Physics, Studio Art</h5>

        <h3 className='aboutMe-skills'>Skills</h3>
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
          <h4>Express</h4>
          <h4>PostreSQL</h4>
          <h4>Mocha</h4>
          <h4>Chai</h4>

        <h3 className='aboutMe-certifications'>Certifications</h3>
          <h4>6-Sigma DMAIC and DFSS</h4>
          <h4>Engineer in Training</h4>
          <h4>Certified Energy Manager</h4>

        <h3 className='aboutMe-activities'>Activities</h3>
          <h4>Skiing</h4>
            <h5>Division I nordic skiing at Colby College & Dartmouth College</h5>
            <h5>Backcountry skiing & mountaineering</h5>
          <h4>Outdoors</h4>
            <h5>Camping, ultra-running, hiking, climbing, cycling</h5>
      </div>
    </section>
  )
}
