import PostFooter from "./PostDetails/PostFooter";
import PostHeader from "./PostDetails/PostHeader";

export default function Post() {
  return (
    <div
      className="post_wrapper border my-4 rounded"
      style={{ width: "614px" }}
    >
      <PostHeader />
      <hr className="m-0 p-0" />
      <div className="overflow-hidden">
        <img
          src="https://picsum.photos/614/1000"
          width="614"
          height="1000"
          alt="user_post"
        />
      </div>
      <PostFooter />
    </div>
  );
}
