function Stories() {
  const story = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  return (
    <div
      className="stories-wrapper rounded border"
      style={{
        width: "614px",
      }}
    >
      {story.map((s) => (
        <div key={s} className="story-wrapper">
          <div className="image-wrapper">
            <img
              className="rounded-circle bg-white"
              src={`http://placehold.it/56x56`}
              alt="storie img"
              width="56"
              height="56"
            />
          </div>
          <p className="story-username">
            Lorem ipsum Lorem ipsum dolor sit amet.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
