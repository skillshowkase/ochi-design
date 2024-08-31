import React from "react";

const Banner = () => {
  return (
    <div className="h-full w-full">
      <div className="section__holder pt-100 pb-90 lg:pt-140 md:pb-120 min-h-vh-static md:min-h-700 laptop:min-h-vh flex">
        <div className="container flex flex-col pt-[9.5rem] w-full pl-[4rem] pr-[5rem]">
          <h1
            className="font-fg uppercase leading-negative mb-60 lg:mb-100 is-inview text-[9vw] leading-[18vh] bg-[url('../assets/images/content-image01.webp')]"
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
            <div className="splitter-row overflow-hidden splitter-row__2 block text-start relative">
              <div className="splitter-wrap overflow-hidden is-row-parent block text-start relative">
                <div className="relative inline-block">eye-opening</div>
              </div>
            </div>
            <div className="splitter-row overflow-hidden splitter-row__3 block text-start relative">
              <div className="splitter-wrap overflow-hidden is-row-parent block text-start relative">
                <div className="relative inline-block">presentations</div>
              </div>
            </div>
          </h1>
          <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mt-auto">
            <div className="md:col-span-4 lg:col-span-6 reset-last">
              <p>For public and private companies</p>
            </div>
            <div className="md:col-span-4 lg:col-span-3 reset-last">
              <div className="wysiwyg reset-last max-w-275">
                <p>From the first pitch to IPO</p>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-3 reset-last md:text-right">
              <a
                href="http://ochi.design/contact/"
                className="btn btn--icon-outside"
              >
                <span className="btn__text">Start the project</span>{" "}
                <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
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
