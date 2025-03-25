function Resume() {
  return (
    <section className="resume-section">
     <div className="content-box">

      <h2>Resume</h2>

      <p className="resume-summary">
        Results-driven Software QA Engineer with a proven track record of collaborating with development teams
        to build robust, high-quality applications that align with business and user needs.
        Experienced in designing and maintaining UI and API automation frameworks that streamline development.
      </p>

      <h3>Experience</h3>

      <div className="job">
        <h4>Software Automation Engineer – Peek (2021–2024)</h4>
        <ul>
          <li>Designed and maintained automated test scripts, improving deployment efficiency by 40%.</li>
          <li>Led Shift Left testing strategy to reduce defect resolution cost.</li>
          <li>Executed QA plans, regression testing, and managed deployment.</li>
        </ul>
      </div>

      <div className="job">
        <h4>QA Engineer – Genalyte (2020–2021)</h4>
        <ul>
          <li>Built UI automation with Selenium and performed API testing with Postman.</li>
          <li>Tested features through exploratory, smoke, and regression strategies.</li>
          <li>Documented bugs, tracked resolutions, and ensured production readiness.</li>
        </ul>
      </div>

      <h3>Technical Skills</h3>
      <p>
        Agile, Scrum, SDLC, Selenium, Cypress, JavaScript, TypeScript, Git, HTML, CSS, Node.js,
        Postman, SQL, Mobile Testing (iOS/Android), Jira, Testrail, Jenkins, Bamboo, Codefresh.
      </p>

      {/* PDF Download */}
      <a
        href="/assets/Luna-Houshmand-Resume.pdf"
        download
        className="resume-download"
      >
        📄 Download PDF Resume
      </a>
      </div>
      </section>
  );
}

export default Resume;

  