import cta from "../assets/cta-video.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="home-page">
            <h1>
              Connect everything. <span>Build anything.</span>
            </h1>
            <h4>
              Netlify is the modern development platform for Enterprises to
              realize the speed,{" "}
              <span>
                agility and performance of a scalable, composable web
                architecture.
              </span>
            </h4>

            <div className="home-buttons">
              <button className="explore">Explore platform</button>
              <button className="request">Request demo</button>
            </div>
          </div>
          <div className="cta">
            <div className="video">
              <img className="cta-video" src={cta} alt="video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
