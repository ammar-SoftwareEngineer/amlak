import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginForm from "./component/LoginForm/LoginForm";
import ImageSideBar from "./component/ImageSideBar/ImageSideBar";

function App() {
  return (
    <div className="App ">
      <div className="row g-0 justify-content-between">
        <div className="col-lg-4 col-md-4 d-lg-block d-none">
          <ImageSideBar />
        </div>
        <div className="col-lg-6 col-md-6 d-flex mx-lg-auto align-items-center col-md-12 min-vh-100">
          <div className="container ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
