import SplashScreenModule from "./SplashScreen.module.css";
import { useEffect, useState } from "react";
import image from "../assets/logo512.png";

const SplashScreen = () => { 
  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    visible && <div className={SplashScreenModule.splashscreen}>
      <img src={image} alt="gremlin" className={SplashScreenModule.img} />
    </div>
  )
}

export default SplashScreen;