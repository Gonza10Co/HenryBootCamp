import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Page(props) {
  return (
    <AppBar posistion="static">
      <Toolbar className="appbar">
        <Typography variant="h6" color="inherit">
          Gonzalo Correa
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
