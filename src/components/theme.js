import { createTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export default createTheme({
  typography: {
    useNextVariants: true,
    color: "#fff",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#007242",
    },
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: "#fff",
  },
});
