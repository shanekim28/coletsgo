import ListViewComponent from "../components/ListViewComponent";
import CheckInComponent from "../components/CheckInComponent";
import MainLayoutModule from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={MainLayoutModule.mainContent}>
      <ListViewComponent />

      <div className={MainLayoutModule.button}>
        <CheckInComponent />
      </div>
    </div>
  )
}

export default MainLayout;