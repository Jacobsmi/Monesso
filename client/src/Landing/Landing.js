import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Graph from "./Graph.svg";

export default function Landing() {
  return (
    <Box sx={{
      height: "100vh",
      width: "100vw",
      minHeight: "600px"
    }}>
      <Box
        sx={{
          height: "10%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Typography variant="h4" color="white" flexGrow="1">Monesso</Typography>
        <Button variant="outlined" color="secondary" sx={{ marginRight: "20px" }} component={Link} to="/signin">Sign In</Button>
        <Button variant="contained" color="secondary" sx={{ marginRight: "20px" }} component={Link} to="/signup">Get Started</Button>
      </Box>

      <Box
        sx={{
          height: "70%",
          bgcolor: "primary.main",
          display: "flex",
        }}
      >

        <Box
          sx={{
            height: "80%",
            width: "45vw",
            marginLeft: "5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",

          }}
        >
          <Typography variant="h3" color="white">Finance made easy</Typography>
          <Typography variant="h5" color="white">Easily track your financial goals and progress.</Typography>
        </Box>

        <Box
          sx={{
            height: "100%",
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={Graph} height="60%" alt="Graph going up" />
        </Box>

      </Box>

    </Box>
  )
}