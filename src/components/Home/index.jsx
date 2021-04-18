import Post from "./Post";
import Stories from "./Stories";

const Home = () => {
  const arr = [1, 2];
  return (
    <div className="home">
      <div className="container">
        <div className="row home-wrapper">
          <div className="col-8">
            <Stories />
            {arr.map((i) => (
              <Post key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
