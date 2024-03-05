import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import HorseSlider from "../sliders/HorseSlider";

const HorseRacingTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab11"
      role="tabpanel"
      tabIndex="0"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-8 col-lg-8">
            <div className="racing__tab">
              <nav>
                <div className="nav nav-tabs" id="nav-tabo" role="tablist">
                  {/* Today Btn */}
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Today
                  </button>

                  {/* Tomorrow Btn */}
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein2"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Tomorrow
                  </button>

                  {/* Future & Btn */}
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#horsein3"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Future & Specials
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
     
      </div>


      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default HorseRacingTab;
