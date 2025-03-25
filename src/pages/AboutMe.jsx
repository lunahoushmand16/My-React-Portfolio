import avatarImage from '../assets/avatarImage.png'; // or .png or .webp

function AboutMe() {
    return (
      <section className="about-section">
        <div className="about-heading-wrapper">
          <h2 className="about-heading">About me</h2>
        </div>
        <div className="about-container">
          <img
            src={avatarImage}
            alt="Developer avatar"
            className="about-avatar"
          />
          <div className="about-text">
           <p>
           Hi! I'm <strong>Luna Houshmand</strong>, a passionate web developer with a background in QA automation.
           I'm currently transitioning into frontend development using <strong>React</strong>, <strong>Vite</strong>,
           and <strong>TypeScript</strong>.
           </p>

           <p>
           I love solving problems, building clean user interfaces, and constantly learning new technologies.
           My approach to development is rooted in curiosity, collaboration, and the drive to build intuitive, impactful digital experiences.
           </p>

           <p>
           I'm a results-driven <strong>Software QA Engineer</strong> with a proven track record of collaborating closely
           with development teams to deliver robust, high-quality applications that align with both business goals and user needs.
           I have hands-on experience designing and maintaining UI and API automation frameworks that streamline workflows
           and ensure consistent testing coverage.
           </p>

           <p>
           I'm skilled at identifying and documenting defects, implementing effective solutions, and ensuring efficient test
           execution to meet fast-paced project deadlines. As I shift into frontend development, I bring a unique perspective
           rooted in <strong>quality</strong>, <strong>detail</strong>, and <strong>user experience</strong>—aiming to build
           applications that not only work great, but also feel great to use.
           </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutMe;
  
  