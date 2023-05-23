import ListViewComponent from "../components/ListViewComponent";
import MainLayoutModule from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={MainLayoutModule.mainContent}>
      <ListViewComponent />
    </div>
  )
}

export default MainLayout;