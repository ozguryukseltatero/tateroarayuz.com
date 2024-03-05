import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import Select from "../select/Select";

const categoris = [
  { id: 1, name: "Game Lines" },
  { id: 2, name: "Game Lines 2" },
  { id: 3, name: "Game Lines 3" },
  { id: 4, name: "Game Lines 4" },
];

const AmericanTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab9"
      role="tabpanel"
      tabIndex="0"
    >
 

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default AmericanTab;
