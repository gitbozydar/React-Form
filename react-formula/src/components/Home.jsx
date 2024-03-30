import "./Home.css";
import Logo from "./Logo";
import reactLogo from "../assets/reactLogo.svg";

const Home = ({ children, title }) => {
  return (
    <div className="home-wrapper">
      <h1>{title}</h1>
      <Logo imgSource={reactLogo} altImg={"react-logo"} imgWidth={200} />
      {children}
    </div>
  );
};

export default Home;
