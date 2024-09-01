import React from "react";

const Banner = () => {
  return (
    <div className="h-full w-full">
      <div className="section__holder pt-100 pb-30 lg:pt-140 md:pb-120 min-h-vh-static md:min-h-700 laptop:min-h-vh flex">
        <div className="container flex flex-col pt-[9.5rem] w-full ">
          <h1
            className="font-fg uppercase mb-[10vh] lg:mb-100 is-inview text-[9vw] leading-[7vw] pl-[4rem] pr-[5rem]"
            data-scroll=""
            data-scroll-call="split"
            data-ignore-animation=""
            data-heading-image-line="2"
            data-shown="true"
            data-show="true"
          >
            <div className="splitter-row overflow-hidden splitter-row__1 block text-start relative">
              <div className="splitter-wrap overflow-hidden is-row-parent block text-start relative">
                {" "}
                <div className="relative inline-block"> We</div>{" "}
                <div className="relative inline-block">create</div>
              </div>
            </div>
            <div
              className="splitter-row overflow-hidden splitter-row__2 block text-start relative "
              id="eye"
            >
              <div className="splitter-wrap overflow-hidden is-row-parent flex text-start relative">
                <div id="image-div" className="relative">
                  <img src="../assets/images/content-image01.webp" alt="" />
                </div>
                <div className="relative">eye-opening</div>
              </div>
            </div>
            <div className="splitter-row overflow-hidden splitter-row__3 block text-start relative">
              <div className="splitter-wrap overflow-hidden is-row-parent block text-start relative">
                <div className="relative inline-block">presentations</div>
              </div>
            </div>
          </h1>
          <div className="grid gap-y-30 md:grid-cols-12 py-[1vw] px-[3.5vw] outline-top mt-[10vh] mb-[12.4vh] w-[100vw] border-t-[1px] border-black font-nm font-extralight text-[1.1rem]">
            <div className="md:col-span-4 lg:col-span-6 reset-last">
              <p>For public and private companies</p>
            </div>
            <div className="md:col-span-4 lg:col-span-3 reset-last">
              <div className="wysiwyg reset-last max-w-275">
                <p>From the first pitch to IPO</p>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-3 reset-last md:text-right  w-fit ml-[8vw]">
              <a
                href="http://ochi.design/contact/"
                className="btn btn--icon-outside start-project-btn"
              >
                <span className="btn__text uppercase border-black border-[1px] rounded-3xl px-3 py-1 border-solid">
                  Start the project
                </span>{" "}
                <i className="ri-arrow-right-up-line border-black border-[1px] rounded-full p-2 border-solid"></i>
              </a>{" "}
            </div>
          </div>
          <div className="opacity-30 text-center absolute bottom-50 w-full left-0 hidden laptop:grid laptop:grid-cols-12">
            <div className="laptop:col-span-6 laptop:col-start-7">
              <div className="scroll-down-indicator">
                <span className="scroll-down-indicator__text">Scroll down</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
