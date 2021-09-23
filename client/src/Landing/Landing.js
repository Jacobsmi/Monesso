import "./Landing.css";
import GraphLine from "./graphline.svg";
import DollarSign from "./dollarsign.svg";
import MoneyBag from "./moneybag.svg";
import Graph from "./graph.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="Landing">

      <div className="Landing-TopBar">
        <div className="Landing-TopBar-Logo">Monesso</div>
        <Link to="/signup" className="Landing-TopBar-Link">Sign Up</Link>
        <Link to="/login" className="Landing-TopBar-Link">Login</Link>
      </div>

      <div className="Landing-Body">
        <div style={{width: "50vw"}}>
          <div style={{ marginLeft: "5vw", fontSize: "3rem", color: "white", fontWeight: "600", marginTop: "15vh" }}>Finance Made Easy</div>
          <div style={{ marginLeft: "5vw", fontSize: "1.5rem", color: "white", fontWeight: "500", marginTop: "15vh" }}>Easily track your financial goals and progress.</div>
        </div>
        <div style={{width: "50vw", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <img src={Graph} style={{height: "60%"}} alt="Graph" />
        </div>
      </div>

      <div className="Landing-Footer" style={{position: "static"}}>
        <div className="Landing-Footer-Box" style={{ fontSize: "1.5rem", paddingRight: "5rem", textAlign: "left" }}>
          Learn more about our features
        </div>
        <div className="Landing-Footer-Box">
          <div className="Landing-Footer-Box-Icon">
            <img src={DollarSign} alt="Dollar Sign" />
          </div>
        Track your savings and spending
        </div>
        <div className="Landing-Footer-Box">
          <div className="Landing-Footer-Box-Icon">
            <img src={GraphLine} alt="Graph Line" />
          </div>
          View your investment portfolio
        </div>
        <div className="Landing-Footer-Box" style={{ borderRight: "none" }}>
          <div className="Landing-Footer-Box-Icon">
            <img src={MoneyBag} alt="Money Bag" />
          </div>
          Create savings goals and monitor them
        </div>
      </div>
    </div>
  )
}