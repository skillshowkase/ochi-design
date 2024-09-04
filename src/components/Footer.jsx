const Footer = () => {
  const logo = (
    <svg
      width="72"
      height="30"
      viewBox="0 0 72 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
        fill="currentColor"
      ></path>
      <path
        d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
        fill="currentColor"
      ></path>
      <path
        d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
        fill="currentColor"
      ></path>
      <path
        d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
        fill="currentColor"
      ></path>
      <path
        d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const navItems = [
    { id: 52, title: "Home", link: "https://ochi.design/", isActive: true },
    {
      id: 51,
      title: "Services",
      link: "https://ochi.design/presentation-design-agency-services/",
    },
    {
      id: 48,
      title: "Our work",
      link: "https://ochi.design/clients-success-stories-presentation-design/",
    },
    { id: 50, title: "About us", link: "https://ochi.design/ochi-team/" },
    {
      id: 49,
      title: "Insights",
      link: "https://ochi.design/insights-presentation-design-agency/",
    },
    { id: 47, title: "Contact us", link: "https://ochi.design/contact/" },
  ];

  const socialLinks = [
    {
      icon: "",
      href: "https://www.instagram.com/ochi_design/",
      text: "Instagram",
    },
    { icon: "", href: "https://www.behance.net/ochi_design", text: "Behance" },
    {
      icon: "",
      href: "https://www.facebook.com/OCHI-presentation-design-103605044779378/",
      text: "Facebook",
    },
    {
      icon: "",
      href: "https://www.linkedin.com/company/56403597",
      text: "Linkedin",
    },
  ];

  const contactInfo = [
    {
      label: "L:",
      content: (
        <address>
          <span className="link link--underline">202-1965 W 4th Ave</span>
          <br />
          <span className="link link--underline">Vancouver, Canada</span>
          <br />
          <span className="link link--underline"></span>
          <br />
          <span className="link link--underline">30 Chukarina St</span>
          <br />
          <span className="link link--underline">Lviv, Ukraine</span>
        </address>
      ),
    },
    {
      label: "E:",
      content: (
        <a
          className="link link--underline"
          href="mailto:http://hello@ochi.design"
        >
          hello@ochi.design
        </a>
      ),
    },
  ];

  return (
    <footer
      className="footer bg-gray-100 relative pt-75 pb-30 lg:pt-115 lg:pb-0 z-3 laptop:min-h-vh-base is-inview"
      style={{
        opacity: 1,
        pointerEvents: "all",
      }}
    >
      <span className="absolute w-full left-0 bottom-full -mb-1 h-15 rounded-tl-full rounded-tr-full bg-inherit"></span>
      <div className="container">
        <div className="grid md:grid-cols-12 md:gap-y-15 mb-40">
          <div className="md:col-span-5 laptop:col-span-6">
            <h3
              className="h1 uppercase leading-negative mb-0 is-inview"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="splitter-row overflow-hidden splitter-row__1"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                }}
              >
                <div
                  className="splitter-wrap overflow-hidden is-row-parent"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    opacity: 1,
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    eye-
                  </div>
                </div>
              </div>
              <div
                className="splitter-row overflow-hidden splitter-row__2"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                }}
              >
                <div
                  className="splitter-wrap overflow-hidden is-row-parent"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    opacity: 1,
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    opening
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div className="md:col-span-7 laptop:col-span-6">
            <h3
              className="h1 uppercase leading-negative mb-40 is-inview"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="splitter-row overflow-hidden splitter-row__1"
                style={{
                  display: "block",
                  textAlign: "start",
                  position: "relative",
                }}
              >
                <div
                  className="splitter-wrap overflow-hidden is-row-parent"
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    opacity: 1,
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    presentations
                  </div>
                </div>
              </div>
            </h3>
            <div className="grid grid-cols-2 gap-30">
              <div className="md:order-last md:flex md:justify-end laptop:pr-40">
                <div>
                  <p className="mb-15">M:</p>
                  <ul id="footer" className="footer-nav leading-loose">
                    {navItems.map((item) => (
                      <li
                        key={item.id}
                        className={`menu-item ${
                          item.isActive ? "active current_page_item" : ""
                        }`}
                      >
                        <a
                          href={item.link}
                          className={`footer-nav__link link link--underline ${
                            item.isActive ? "is-active" : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2">
                <div>
                  <p className="mb-15">S:</p>
                  <ul className="social-list leading-loose social-list--default">
                    {socialLinks.map((link, index) => (
                      <li key={index} className="social-list__item">
                        <a
                          className="social-list__link link link--underline"
                          href={link.href}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-30 col-span-2 md:col-span-1">
                {contactInfo.map((item) => (
                  <div key={item.label} className="leading-loose">
                    <p className="mb-15">{item.label}</p>
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-y-15 md:items-end">
          <div className="mb-40 md:mb-0 md:col-span-5 laptop:col-span-6">
            <a href="https://ochi.design" className="inline-flex">
              {logo}
            </a>
          </div>
          <div className="opacity-30 md:col-span-4 laptop:col-span-4 md:-mr-30">
            &copy; ochi design 2024.{" "}
            <a
              href="https://ochi.design/privacy/"
              className="link link--underline"
            >
              Legal Terms
            </a>
          </div>
          <div className="md:text-right opacity-30 md:col-span-3 laptop:col-span-2">
            <a href="https://ochi.design" target="_blank" className="link">
              Website by Obys
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
