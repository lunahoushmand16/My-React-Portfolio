function Project({ title, image, video, deployedLink, repoLink }) {
  return (
    <div className="project-card">
      {video ? (
        <video
          src={video}
          className="project-video"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img src={image} alt={`${title} screenshot`} className="project-image" />
      )}
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Project;



