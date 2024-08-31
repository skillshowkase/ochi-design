const Navlinks = () => {
  return (
    <div className="col-span-6 hidden lg:flex">
      <ul
        id="primary"
        className="header-nav flex-grow flex gap-[1.56vw] ml-[-0.6vw] mt-1"
      >
        {["Services", "Our work", "About us", "Insights", "Contact Us"].map(
          (link, index) => (
            <li id="menu-item-33" className="menu-item" key={index}>
              <a
                href="https://ochi.design/presentation-design-agency-services/"
                className="link link--custom main-nav__link inline-block align-top cursor-pointer"
              >
                <span className="link__inner overflow-hidden relative block">
                  <span className="w-fit text-nowrap link__default-text block relative font-nm text-[1.1rem] text-[#212121] font-[400] antialiased leading-[1]">
                    {link}
                  </span>
                  <span className="link__hover-text text-nowrap block absolute font-nm text-[1.1rem] text-[#212121] font-[400] antialiased leading-[1]">
                    {link}
                  </span>
                </span>
              </a>
            </li>
          )
        )}
      </ul>{" "}
    </div>
  );
};

export default Navlinks;
