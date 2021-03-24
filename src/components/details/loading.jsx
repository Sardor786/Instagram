const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <img
        src="./assets/gifs/thinking.gif"
        alt="thinking gif"
        width="100"
        height="100"
      />
      <h1
        style={{
          fontFamily: "Billabong",
          letterSpacing: "5px",
          fontWeight: "normal",
        }}
      >
        Loading...
      </h1>
    </div>
  );
};

export default Loading