const About = () => {
  return (
    <div className="h-full w-full bg-[#CDEA67] font-nm">
      <div className="section__holder pt-40 pb-12 md:pt-75 md:pb-35">
        <div className="container px-14">
          <div className="mb-60">
            <div className="max-w-1100 reset-last">
              <h2 className="custom-heading ">
                <p className="p1 text-[4rem] leading-[60px]">
                  Ochi is a strategic presentation agency for forward-thinking
                  businesses that need to <u>raise funds</u>,{" "}
                  <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, and{" "}
                  <u>hire great peo­ple</u>.
                </p>
              </h2>
            </div>
          </div>
          <div className="para2 grid gap-y-10 md:grid-cols-12 outline-top mb-40 md:mb-90 text-[1.1rem] mt-[-8rem]">
            <div className="md:col-span-4 lg:col-span-6 reset-last">
              <p>What you can expect:</p>
            </div>
            <div className="md:col-span-4 lg:col-span-4 reset-last w-[20vw]">
              <div className="wysiwyg reset-last max-w-275 ">
                <p>
                  We create tailored presentations to help you persuade your
                  colleagues, clients, or investors. Whether it’s live or
                  digital, delivered for one or a hundred people.{" "}
                </p>
                <br />
                <p className="w-[19vw]">
                  We believe the mix of strategy and design (with a bit of
                  coffee) is what makes your message clear, convincing, and
                  captivating.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start mr-[5rem]">
              <div>
                <p className="mb-15">S:</p>
                <ul className="social-list leading-loose social-list--default">
                  <li className="social-list__item">
                    <a
                      className="social-list__link link link--underline"
                      href="https://www.instagram.com/ochi_design/"
                    >
                      Instagram{" "}
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link link link--underline"
                      href="https://www.behance.net/ochi_design"
                    >
                      Behance{" "}
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link link link--underline"
                      href="https://www.facebook.com/OCHI-presentation-design-103605044779378/"
                    >
                      Facebook{" "}
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link link link--underline"
                      href="https://www.linkedin.com/company/56403597"
                    >
                      Linkedin{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="para3 grid gap-y-40 md:grid-cols-2  outline-top "
            data-component="button-zoom"
          >
            <div>
              <h2 className="mb-20">Our approach:</h2>
              <a
                href="https://ochi.design/ochi-team/"
                className="btn btn--primary"
                data-zoom-target=""
              >
                <span className="btn__text">Read more</span>
                <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
              </a>
            </div>
            <div>
              <div className="zoom-hover rounded overflow-hidden relative">
                <picture className="w-full">
                  <img
                    className="bg-gray-200 w-full max-w-full rounded entered loaded"
                    data-component="lazyload"
                    data-animate="data-animate"
                    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                    width="663"
                    height="469"
                    data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                    data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
                    alt="image description"
                    data-ll-status="loaded"
                    srcSet="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
