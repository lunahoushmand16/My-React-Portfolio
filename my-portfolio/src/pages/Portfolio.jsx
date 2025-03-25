import Project from '../components/Project';
import weatherAppImg from '../assets/WeatherApp.png';
import TypeScriptCliAppVideo from '../assets/TypeScript-Cli-App.mp4';
import ReadmeGeneratorVideo from '../assets/ReadmeGenerator.mp4';
import weatherAPIAppImg from '../assets/WeatherAPIAPP.png';

function Portfolio() {
  const projects = [
    {
      title: 'TypeScript CLI App',
      video: TypeScriptCliAppVideo, // ✅ Not "image"
      deployedLink: 'https://app.screencastify.com/v3/watch/rWX7SYr4ahaT4v7zjs27',
      repoLink: 'https://github.com/lunahoushmand16/Typescript-Cli-App/blob/main/README.md'
    },
    {
      title: 'Open-Weather App',
      image: weatherAppImg,
      deployedLink: 'https://openweather-api-app.onrender.com',
      repoLink: 'https://github.com/lunahoushmand16/OpenWeather-API-App'
    },
    {
      title: 'Readme Generator',
      video: ReadmeGeneratorVideo,
      deployedLink: 'https://app.screencastify.com/v3/watch/k0of0e6ih2dc9e3pxyrq',
      repoLink: 'https://github.com/lunahoushmand16/DevPro-Readme-Generator'
    },
      {
        title: 'HTML/CSS/API Project',
        image: weatherAPIAppImg,
        deployedLink: 'https://lunahoushmand16.github.io/UCI-Weather/',
        repoLink: 'https://github.com/lunahoushmand16/UCI-Weather'
      },
  ];

  return (
    <section className="page-section">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;


