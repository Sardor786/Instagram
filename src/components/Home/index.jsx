import React, { useState } from "react";
import Post from "./Post";
import Stories from "./Stories";
import PostSkleton from "./PostSkleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  const arr = [1];

  return (
    <div className="home">
      <div className="container">
        <div className="row home-wrapper">
          <div className="col-8">
            <Stories />
            {arr.map((i) =>
              loading ? <PostSkleton key={i} /> : <Post key={i} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
