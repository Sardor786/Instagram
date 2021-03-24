import Stories from "./Stories";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row home-wrapper">
          <div className="col-8">
            <Stories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
