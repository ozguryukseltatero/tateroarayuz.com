import Link from "next/link";
import FooterHome from "../footer/FooterHome";
import Select from "../select/Select";

const categoris = [
  { id: 1, name: "Result 1X2" },
  { id: 2, name: "Result 1X3" },
  { id: 3, name: "Result 1X4" },
  { id: 4, name: "Result 1X5" },
];
const categoris2 = [
  { id: 1, name: "Over/Under" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];
const categoris3 = [
  { id: 1, name: "Both teams to score?" },
  { id: 2, name: "...." },
  { id: 3, name: "...." },
  { id: 4, name: "...." },
];

const BasketballTab = () => {
  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab6"
      role="tabpanel"
      tabIndex="0"
    >
    
      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default BasketballTab;
