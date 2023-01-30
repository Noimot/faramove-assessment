import swimmingIcon from "../assets/swimmingIcon.svg";
import exerciseIcon from "../assets/exerciseIcon.svg";
import gardenIcon from "../assets/gardenIcon.svg";
import acIcon from "../assets/acIcon.svg";
import televisionIcon from "../assets/televisionIcon.svg";
import wifiIcon from "../assets/wifiIcon.svg";
import securityIcon from "../assets/securityIcon.svg";

export interface IData {
    id: number;
    icon: string;
    name: string;
  }

export const data: IData[] = [
  {
    id: 1,
    icon: swimmingIcon,
    name: "swimming pool",
  },
  {
    id: 2,
    icon: televisionIcon,
    name: "television set",
  },
  {
    id: 3,
    icon: securityIcon,
    name: "security pool",
  },
  {
    id:4,
    icon: gardenIcon,
    name: "garden",
  },
  {
    id: 5,
    icon: acIcon,
    name: "air condition",
  },
  {
    id: 6,
    icon: wifiIcon,
    name: "wifi",
  },
  {
    id:7,
    icon: exerciseIcon,
    name: "exercise tools",
  },
];
