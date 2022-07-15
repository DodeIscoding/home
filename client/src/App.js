import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Main from "./components/views/Page/Main"
import Communication from "./components/views/Page/Communication"
import CCTV from "./components/views/Page/CCTV"
import Parking from "./components/views/Page/Parking"
import MapContainer from "./components/views/html/KakaoMap"
import Noticeboard from "./components/views/Page/Noticeboard.js";
import Contentsboard from "./components/views/html/Noticeboard/Contentsboard"
import postView from "./components/views/html/Noticeboard/PostView"

function App() {
  
  return (
    <Router>
    <div>
       <Switch>
          <Route exact path="/Noticeboard" component={(Noticeboard)} />
          <Route exact path="/map" component={(MapContainer)} />
          <Route exact path="/" component={(Main)} />
          <Route exact path="/Communication" component={(Communication)} />
          <Route exact path="/CCTV" component={(CCTV)} />
          <Route exact path="/Parking" component={Parking} />
          <Route exact path="/postView/:idx" component={postView} />
        </Switch>
    </div>
  </Router>
);
}

export default App;

