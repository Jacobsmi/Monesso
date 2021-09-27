import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Graph from "./Graph.svg";
import DollarSign from "./DollarSign.svg";
import Line from "./Line.svg";
import MoneyBag from "./MoneyBag.svg";

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
        <Typography variant="h4" color="white" flexGrow="1" sx={{marginLeft: "20px"}}>Monesso</Typography>
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
      <Box
        sx={{
          height: "20%",
          display: "flex",
          alignItems: "center", 
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            borderRight: "1px solid black",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60%"
          }}
        >
          <Typography sx={{
            padding: "2%",
            width: "80%",
            textAlign: "center"
          }}>Learn more about our features</Typography>
        </Box>

        <Box
          sx={{
            borderRight: "1px solid black",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"

          }}
        >
          <img src={DollarSign} height="30px" alt="Dollar Sign" />
          <Typography sx={{
            padding: "2%",
            width: "80%",
            textAlign: "center"
          }}>Track your savings and spending</Typography>
        </Box>

        <Box
          sx={{
            borderRight: "1px solid black",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"

          }}
        >
          <img src={Line} height="30px" alt="Graph line going up" />
          <Typography sx={{
            padding: "2%",
            width: "80%",
            textAlign: "center"
          }}>View your investment portfolio</Typography>
        </Box>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"

          }}
        >
          <img src={MoneyBag} height="30px" alt="Graph line going up" />
          <Typography sx={{
            padding: "2%",
            width: "80%",
            textAlign: "center"
          }}>Create savings goals and monitor them</Typography>
        </Box>
      </Box>
    </Box>
  )
}