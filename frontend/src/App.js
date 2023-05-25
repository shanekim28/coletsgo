import MainLayout from "./layouts/MainLayout";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Geisel Gremlins</title>
      </Helmet>
      <MainLayout/>
    </>
  );
}

export default App;
