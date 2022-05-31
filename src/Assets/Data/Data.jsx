import CompareArrowsTwoToneIcon from "@mui/icons-material/CompareArrowsTwoTone";
import SignalWifiOffRoundedIcon from "@mui/icons-material/SignalWifiOffRounded";
import CollectionsBookmarkTwoToneIcon from "@mui/icons-material/CollectionsBookmarkTwoTone";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeviceThermostatTwoToneIcon from "@mui/icons-material/DeviceThermostatTwoTone";

export const Data = [
  {
    id: 1,
    title: "Moving",
    percentage: "70%",
    count: 264,
    icon: (
      <CompareArrowsTwoToneIcon
        sx={{ width: 30, height: 30 }}
        style={{ color: "white" }}
      />
    ),
    color: "#50C878",
  },
  {
    id: 2,
    title: "Stopped",
    percentage: "70%",
    count: 264,
    icon: (
      <HighlightOffIcon
        sx={{ width: 30, height: 30 }}
        style={{ color: "white" }}
      />
    ),
    color: "#FF5733",
  },
  {
    id: 3,
    title: "Idle",
    percentage: "70%",
    count: 264,
    icon: (
      <DeviceThermostatTwoToneIcon
        sx={{ width: 30, height: 30 }}
        style={{ color: "white" }}
      />
    ),
    color: "#FCD12A",
  },
  {
    id: 4,
    title: "Inactive",
    percentage: "70%",
    count: 264,
    icon: (
      <SignalWifiOffRoundedIcon
        sx={{ width: 30, height: 30 }}
        style={{ color: "white" }}
      />
    ),
    color: "#808080",
  },
  {
    id: 5,
    title: "Out of Service",
    percentage: "70%",
    count: 264,
    icon: (
      <CollectionsBookmarkTwoToneIcon
        sx={{ width: 30, height: 30 }}
        style={{ color: "white" }}
      />
    ),
    color: "#A1045A",
  },
];
