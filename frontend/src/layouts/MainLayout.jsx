import ListViewComponent from "../components/ListViewComponent";
import CheckInComponent from "../components/CheckInComponent";
import MainLayoutModule from "./MainLayout.module.css";
import SplashScreen from "../components/SplashScreenComponent";

const MainLayout = () => {
  return (
    <>
    <SplashScreen />
    <div className={MainLayoutModule.mainContent}>
      <ListViewComponent />

      <div className={MainLayoutModule.button}>
        <CheckInComponent />
      </div>
    </div>
  </>
  )
}

export default MainLayout;