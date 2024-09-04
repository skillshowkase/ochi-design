import React from "react";

const Reviews = () => {
  return (
    <div>
      <h2 className=" p-10 text-[4rem] review-h2">Clients’ reviews</h2>
      <div
        className="outline-bottom mb-60 lg:mb-100 p-10"
        data-component="accordion"
      >
        <div className="accord active" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href=""
                target="_blank"
              >
                Karman Ventures{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>William Barnes</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden opacity-[1]"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Investor Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Sales Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">William Barnes</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded entered loaded"
                        data-component="lazyload"
                        src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                        data-src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                        alt="image description"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      <span className="font-light">
                        They were transparent about the time and the stages of
                        the project. The end product is high quality, and I feel
                        confident about how they were handholding the client
                        through the process. I feel like I can introduce them to
                        someone who needs to put a sales deck together from
                        scratch, and they would be able to handhold the client
                        experience from 0 to 100 very effectively from story to
                        design.{" "}
                      </span>
                      <span className="font-light">5/5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://www.planetly.com/"
                target="_blank"
              >
                Planetly{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Nina Walloch</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden opacity-0 h-0"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Agency</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Big News Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Branded Template</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Investor Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Product Presentation</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Sales Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Startup pitch</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Nina Walloch</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      Ihor and his team tackled the projects with great
                      professionalism and creativity. They understood our brand
                      value and turned this into excellent slide designs. The
                      process was seamless and very effective, so we decided to
                      roll this out across all our presentation decks.
                      Furthermore, their understanding, professionalism, and
                      creativity have secured a continued partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://www.workiz.com/"
                target="_blank"
              >
                Workiz Easy{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Tomer Levy</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden  opacity-0 h-0"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Company Presentation</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Onboarding presentation</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">
                        Policy Deck &amp; Playbook
                      </span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Redesign</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Sales Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Tomer Levy</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/05/Tomer.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      OCHI brought a certain level of professionalism into our
                      presentations that we were lacking before. When I showed
                      our management and HR teams the presentations OCHI
                      developed, they were amazed — the final product was
                      exactly what we needed to create a better experience for
                      new employees and our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://www.premium-blend.com/"
                target="_blank"
              >
                Premium Blend{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Ellen Kim</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden opacity-0 h-0"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Branded Template</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Illustrations</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Ellen Kim</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      They are truly changing the landscape of presentations!!
                      Fast, effective, and nice humans that listened to every
                      detail of our needs. Creating a deck with their template
                      brings so much joy and ease. We proudly showcase their
                      design in our calls and presentations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://hypercare-systems.com/"
                target="_blank"
              >
                Hypercare Systems{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Brendan Goss</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Investor Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Startup pitch</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Brendan Goss</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      The service received from OCHI was absolutely first-class.
                      Their close attention to detail, and deep thought in terms
                      of narrative, flow, and aesthetics, completely exceeded my
                      expectations, which were very high from the outset.
                      Especially loved and appreciated the creation of visuals,
                      animation, and advice around the look and feel that we are
                      after. We will definitely continue working with Ihor and
                      his team. I cannot recommend them highly enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://officevibe.com/"
                target="_blank"
              >
                Officevibe{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Raff Labrie</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Branded Template</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Raff Labrie</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      Ochi has an impressive understanding of what’s needed to
                      do an effective presentation. The stakeholders at work
                      said it’s the best most complete PP template they’ve ever
                      seen. Ochi delivered more than I was expecting and we were
                      really surprised with the quality of his work. Will work
                      with Ochi design again for sure!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://orderlion.com/en"
                target="_blank"
              >
                Orderlion{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Stefan Strohmer</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Agency</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Investor Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Product Presentation</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Review</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Sales Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Stefan Strohmer</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      The result was just amazing! For me, a designer is
                      exceptional when you are so satisfied with the result that
                      you want to look at it the whole day like a kid with a new
                      toy. Ihor and his team delivered exactly that! They are
                      very talented designers who understand the real business
                      problem we are trying to solve and iterate over many
                      drafts to achieve the best possible outcome. We are
                      looking for a long-lasting working relationship!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://blackbookapp.co/"
                target="_blank"
              >
                Black Book{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>Jaci Smith</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Review</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Startup pitch</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">Jaci Smith</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      They nailed what our product was all about. We found their
                      ability to workshop all the angles and take on feedback
                      was great and it shows in the final product. Everything
                      moved with a milestone dynamic brief via Notion which was
                      handy to track progress. We’re very happy with the process
                      and the final product. All was handled well and
                      professionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accord" data-accordion-item="">
          <div className="py-15 outline-top grid grid-cols-12 gap-x-10 leading-loose">
            <div className="col-span-6 lg:col-span-3">
              <a
                className="link link--underline hover:translate-x-10 transition duration-300"
                href="https://www.trawa.de/"
                target="_blank"
              >
                Trawa Energy{" "}
              </a>
            </div>
            <div className="lg:col-span-3 hidden lg:block accordion-services">
              <span>Services:</span>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
              <span>David Budde</span>
            </div>
            <div className="col-span-6 lg:col-span-3 flex-shrink-0 text-right">
              <button
                className="uppercase link link--underline"
                type="button"
                data-accordion-trigger=""
              >
                Read{" "}
              </button>
            </div>
          </div>
          <div
            className="accordion-content overflow-hidden"
            data-accordion-content=""
          >
            <div className="grid gap-y-30 gap-x-10 lg:grid-cols-12 py-30 lg:py-45">
              <div className="lg:col-span-3 lg:col-start-4">
                <p className="mb-15 lg:hidden">Services:</p>
                <div className="flex flex-wrap lg:flex-col items-start justify-start -mb-10">
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Branding</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Investor Deck</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                  <div className="mr-10 mb-10">
                    <a
                      className="btn btn--icon-outside-hidden btn--small"
                      href="https://ochi.design/presentation-design-agency-services/"
                    >
                      <span className="btn__text">Startup pitch</span>
                      <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <div className="relative">
                  <p className="mb-15 lg:hidden">David Budde</p>
                  <div className="w-100 h-100 rounded overflow-hidden mb-20">
                    <picture className="w-full">
                      <img
                        className="w-full max-w-full h-full object-cover accordion-content-image rounded"
                        data-component="lazyload"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
                        data-src="https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png"
                        alt="image description"
                      />
                    </picture>
                  </div>
                  <div className="wysiwyg reset-last">
                    <p>
                      We were surprised by the accuracy with which Ochi Design
                      nailed the overall design language that perfectly aligned
                      with our personal preferences and the vision that we have
                      for our young company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-15 sm:grid-cols-12 mb-90 lg:mb-140">
        <div className="h-300 md:h-380 rounded relative reward-block pointer-events-none bg-green text-green-100 reward-block--green sm:col-span-12 lg:col-span-4 laptop:col-span-6">
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-20">
            <picture className="relative">
              <img
                className="bg-gray-200 entered loaded"
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                height="150"
                width="150"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                data-ll-status="loaded"
              />
            </picture>
          </div>
          <div className="absolute left-0 right-0 bottom-0 p-20 lg:p-30 flex flex-wrap -mb-10">
            <div className="mb-10 mr-10">
              <button
                className="btn btn--outline-green btn--small"
                type="button"
              >
                <span className="btn__text">©2019–2022</span>
              </button>
            </div>
          </div>
        </div>
        <a
          className="h-300 md:h-380 rounded relative reward-block bg-gray-900 text-white reward-block--dark sm:col-span-6 lg:col-span-4 laptop:col-span-3"
          href="https://clutch.co/profile/ochi-presentation-design?_gl=1*tlkh5u*_ga*MTg1NTI3NDM4Ni4xNjQ3NTE0MTYx*_ga_D0WFGX8X3V*MTY0ODgxMzI3OS4zLjEuMTY0ODgxMzMyMC4w#summary"
        >
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-20">
            <picture className="relative">
              <img
                className="bg-gray-200 entered loaded"
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                height="150"
                width="150"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                data-ll-status="loaded"
              />
            </picture>
          </div>
          <div className="absolute left-0 right-0 bottom-0 p-20 lg:p-30 flex flex-wrap -mb-10">
            <div className="mb-10 mr-10">
              <button
                className="btn btn--outline-light btn--small"
                type="button"
              >
                <span className="btn__text">Rating 5.0 on Clutch</span>
              </button>
            </div>
          </div>
        </a>
        <a
          className="h-300 md:h-380 rounded relative reward-block bg-gray-900 text-white reward-block--dark sm:col-span-6 lg:col-span-4 laptop:col-span-3"
          href="https://thefutur.com/alumni"
        >
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center p-20">
            <picture className="relative">
              <img
                className="bg-gray-200 entered loaded"
                data-component="lazyload"
                data-animate="data-animate"
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                height="104"
                width="102"
                data-src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                data-ll-status="loaded"
              />
            </picture>
          </div>
          <div className="absolute left-0 right-0 bottom-0 p-20 lg:p-30 flex flex-wrap -mb-10">
            <div className="mb-10 mr-10">
              <button
                className="btn btn--outline-light btn--small"
                type="button"
              >
                <span className="btn__text">Business Bootcamp Alumni</span>
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
