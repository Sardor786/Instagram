import Post from "./Post";
import Stories from "./Stories";

const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
