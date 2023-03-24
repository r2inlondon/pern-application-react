import { useState } from "react";
import LoginPage from "./LoginPage";
import ApplicationForm from "./app-form/ApplicationForm";
import Dashboard from "./dashboard/Dashboard";
import SplashScreenLoader from "./loader/SplashScreenLoader";
import bgImage from "../images/alevision-co-7ojyp-IXW7w-unsplash-3.jpg";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [removeLoader, setRemoveLoader] = useState("");
  const [showComponent, setShowComponent] = useState({
    login: true,
    applicationForm: false,
    dashboard: false,
  });

  const componentsObject = {
    action: setShowComponent,
    comp: showComponent,
  };

  const handleImageLoad = () => {
    setRemoveLoader("fadeOut");
  };

  return (
    <div className="home-bg">
      <img
        src={bgImage}
        alt=""
        onLoad={() => handleImageLoad()}
        className="main-bg"
      />

      {isLoading && (
        <SplashScreenLoader setIsLoading={setIsLoading} anim={removeLoader} />
      )}
      <div className="app-body">
        <div className="bg-small">
          {showComponent.login && (
            <LoginPage componentsObject={componentsObject} />
          )}
          {showComponent.applicationForm && (
            <ApplicationForm componentsObject={componentsObject} />
          )}
          {showComponent.dashboard && (
            <Dashboard componentsObject={componentsObject} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
