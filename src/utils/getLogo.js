
// I have all the logos named gw_monogram_1c.png  gw_monogram_2c.png  gw_monogram_2c_rev.png  gw_monogram_blk.png  gw_monogram_wht_rev.png  gw_primary_1c.png  gw_primary_2c_0.png  gw_primary_2c_rev.png  gw_primary_blk.png  gw_primary_wht_rev.png
import GWLogo from "../assets/gw_primary_1c.png";
import GWLogo2 from "../assets/gw_monogram_2c.png";
import GWLogo3 from "../assets/gw_monogram_blk.png";
import GWLogo4 from "../assets/gw_monogram_1c.png";
import GWLogo5 from "../assets/gw_primary_2c_0.png";
import GWLogo6 from "../assets/gw_primary_blk.png";
import GWLogo7 from "../assets/gw_monogram_2c_rev.png";
import GWLogo8 from "../assets/gw_monogram_wht_rev.png";
import GWLogo10 from "../assets/gw_primary_2c_rev.png";
import GWLogo9 from "../assets/gw_primary_wht_rev.png";

export default function getLogo(logo) {
    switch (logo) {
        case "GWLogo":
            return GWLogo;
        case "GWLogo2":
            return GWLogo2;
        case "GWLogo3":
            return GWLogo3;
        case "GWLogo4":
            return GWLogo4;
        case "GWLogo5":
            return GWLogo5;
        case "GWLogo6":
            return GWLogo6;
        case "GWLogo7":
            return GWLogo7;
        case "GWLogo8":
            return GWLogo8;
        case "GWLogo9":
            return GWLogo9;
        case "GWLogo10":
            return GWLogo10;
        default:
            return GWLogo;
    }
}