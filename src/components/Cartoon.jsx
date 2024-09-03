const Cartoon = () => {
  return (
    <div className="h-[95vh] bg-slate-600 cartoon-container w-full">
      <div id="img-div " className="flex justify-center items-center relative">
        <div
          id="eyes"
          className="w-[35rem] flex gap-8 justify-center items-center absolute top-[20rem]"
        >
          <svg
            className="w-full h-auto overflow-visible flex-grow"
            data-eye="left"
            width="200"
            height="201"
            viewBox="0 0 200 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
            <g
              className="eyes-svg__group origin-center"
              data-svg-origin="100 100"
              transform="matrix(0.4491,0.89348,-0.89348,0.4491,146.2263,-35.4553)"
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle cx="100" cy="100" r="60" fill="#212121"></circle>
              <circle cx="100" cy="50" r="8" fill="#F4F4F4"></circle>
            </g>
            <text className="uppercase" x="100" y="105" fill="#F4F4F4">
              play
            </text>
          </svg>
          <svg
            className="w-full h-auto overflow-visible flex-grow"
            data-eye="left"
            width="200"
            height="201"
            viewBox="0 0 200 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
            <g
              className="eyes-svg__group origin-center"
              data-svg-origin="100 100"
              transform="matrix(0.4491,0.89348,-0.89348,0.4491,146.2263,-35.4553)"
              style={{ transformOrigin: "0px 0px" }}
            >
              <circle cx="100" cy="100" r="60" fill="#212121"></circle>
              <circle cx="100" cy="50" r="8" fill="#F4F4F4"></circle>
            </g>
            <text className="uppercase" x="100" y="105" fill="#F4F4F4">
              play
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cartoon;
