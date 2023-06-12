import Layout from "./Layout";
import "./Home.css";
import Booking from "./Booking";
import { Helmet } from "react-helmet";
import Fabicon from "../assets/img/favicon.png";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LWS Assignment 2 | Flight Booking</title>
        <link rel="icon" type="image/x-icon" href={Fabicon} />
      </Helmet>
      <Layout></Layout>
      <Booking></Booking>
    </div>
  );
};

export default Home;
