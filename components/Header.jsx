import HeaderTop from "../public/background/header-top-bg.jpg";

export default function Header() {
  return (
    <>
      <div
        className="navbar-top style-one text-white bgs-cover"
        style={{ backgroundImage: `url(${HeaderTop.src})` }}
      >
        <div className="container mx-auto sm:px-4 container-1570">
          <div className="flex flex-wrap ">
            <div className="lg:w-1/2 pr-4 pl-4">
              <div className="topbar-left text-lg-start ">
                <span>Your Trust Printing Partner</span>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4">
              <ul className="topbar-right justify-center lg:justify-end">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a7 7 0 0 1 14 0v1a7 7 0 0 1-14 0V10zm7-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm1 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <b>
                    Call: <a href="calto:+00023456789"> +8801711852202</a>
                  </b>
                </li>
                <li className="social-style-one">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.875 4a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 5.875 4zM5 7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1h-1v4h1a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h1V6H5zm4.5-2.25a.25.25 0 1 1 0 .5.25.25 0 0 1 0-.5zm-.442 8.262a4.5 4.5 0 1 0 5.884-2.595h-.001A4.486 4.486 0 0 0 14 9.5c0-.124-.006-.247-.018-.368a6.75 6.75 0 1 1-8.844 3.87zm5.846-1.755a.75.75 0 0 1 1.047-1.083 3 3 0 1 0-3.819-1.732.75.75 0 1 1-.814-1.267 4.5 4.5 0 0 1 5.762 2.595.75.75 0 0 1-1.047 1.083 3 3 0 1 0-1.13-1.678.75.75 0 0 1-1.037.051.75.75 0 0 1 .051-1.037 4.5 4.5 0 0 1 3.038-2.02.75.75 0 1 1 .462 1.428 3 3 0 0 0-2.038 1.346.75.75 0 0 1-1.2.272.75.75 0 0 1-.272-1.2zM3.857 15a1.75 1.75 0 1 1 3.357-.665.75.75 0 0 1-1.425.456 1 1 0 1 0-.828 1.824A.25.25 0 0 1 5.857 15h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.053 4a1 1 0 0 1 .117-1.412l6.944-4a1 1 0 0 1 1.294.118l6.942 8a1 1 0 0 1 .031 1.371l-5.972 7a1 1 0 0 1-1.447.03l-2.945-3.428-1.792 2.22a1 1 0 0 1-1.561.053l-4.996-5.996A1 1 0 0 1 3.053 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.502 4c1.936 0 3.722.834 4.955 2.16a.5.5 0 0 1-.675.74 8.096 8.096 0 0 0-8.564 0 .5.5 0 1 1-.675-.74A6.999 6.999 0 0 1 1.5 4a.5.5 0 0 1 .5-.5h6.002a.5.5 0 0 1 .5.5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.957 5.897a.5.5 0 0 1 .643-.766A9.08 9.08 0 0 1 17 9c0 .854-.116 1.681-.335 2.466a.5.5 0 1 1-.966-.263c.18-.615.301-1.267.301-1.94a7.79 7.79 0 0 0-.297-2.307.5.5 0 0 1 .766-.643zM9.5 7c.53 0 1.033.145 1.465.397a.5.5 0 0 1-.53.848A3.98 3.98 0 0 0 9.5 8a3.98 3.98 0 0 0-1.935.517.5.5 0 1 1-.53-.848A3.98 3.98 0 0 0 8.5 7a3.98 3.98 0 0 0 1.935-.517.5.5 0 0 1 .065-.923A1.5 1.5 0 1 1 9.5 7zm-.5 1a.5.5 0 0 0-.5.5v.9a.5.5 0 1 0 1 0v-.9a.5.5 0 0 0-.5-.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5zm14 2.5a2 2 0 0 0-2-2h-3.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L8.586 5H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
