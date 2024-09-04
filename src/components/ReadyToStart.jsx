import React from "react";

const ReadyToStart = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div
        className="section__holder py-70 md:py-85 laptop:py-140 is-inview"
        data-scroll=""
        data-scroll-call="progress-sticky"
        data-scroll-id="sticky-cta"
        data-show="true"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <div className="container">
          <div>
            <div className="text-center w-full">
              <h2
                className="heading-large leading-negative uppercase mb-40 is-inview"
                data-scroll=""
                data-scroll-call="split"
                data-interval="0.1"
                data-show="true"
                data-shown="true"
              >
                <div className="splitter-row overflow-hidden splitter-row__1 block text-center relative">
                  <div className="splitter-wrap overflow-hidden is-row-parent block text-center relative opacity-[1]">
                    {" "}
                    <div className="relative inline-block"> Ready</div>
                  </div>
                </div>
                <div className="splitter-row overflow-hidden splitter-row__2  block text-center relative">
                  <div className="splitter-wrap overflow-hidden is-row-parent block text-center relative opacity-[1]">
                    <div className="relative inline-block">to</div>{" "}
                    <div className="relative inline-block">start</div>
                  </div>
                </div>
                <div className="splitter-row overflow-hidden splitter-row__3 block text-center relative">
                  <div className="splitter-wrap overflow-hidden is-row-parent block text-center relative opacity-[1]">
                    <div className="relative inline-block">the</div>{" "}
                    <div className="relative inline-block">project?</div>{" "}
                  </div>
                </div>
              </h2>
            </div>
            <div
              className="laptop:absolute left-0 top-0 z-2 pointer-events-none w-full laptop:h-vh flex items-center justify-center px-80 laptop:p-30 mb-40 laptop:mb-0 is-inview"
              data-scroll=""
              data-scroll-speed="4"
              style={{
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5.07292, 0, 1)",
              }}
            >
              <div className="w-full max-w-360">
                <div
                  className="grid grid-cols-2 eyes-svg justify-center items-center gap-1/12"
                  data-scroll=""
                  data-scroll-call="eyes"
                  data-scroll-repeat=""
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
                    <g className="eyes-svg__group origin-center">
                      <circle cx="100" cy="100" r="60" fill="#212121"></circle>
                      <circle cx="100" cy="50" r="8" fill="#F4F4F4"></circle>
                    </g>
                  </svg>
                  <svg
                    className="w-full h-auto overflow-visible flex-grow"
                    data-eye="right"
                    width="200"
                    height="201"
                    viewBox="0 0 200 201"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="100" cy="100" r="100" fill="#F4F4F4"></circle>
                    <g className="eyes-svg__group origin-center">
                      <circle cx="100" cy="100" r="60" fill="#212121"></circle>
                      <circle cx="100" cy="50" r="8" fill="#F4F4F4"></circle>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid justify-center gap-y-12 items-center text-center">
              <div>
                <a
                  className="btn btn--primary"
                  href="http://ochi.design/contact/"
                >
                  <span className="btn__text">Start the project</span>
                  <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                </a>
              </div>
              <span>OR</span>
              <div>
                <a className="btn btn--default" href="mailto:hello@ochi.design">
                  <span className="btn__text">hello@ochi.design</span>
                  <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
