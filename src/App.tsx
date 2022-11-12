import React, { Component, Suspense } from "react";

import "./App.css";

import NavBar from "./Component/NavBar/NavBar";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  BrowserRouter,
  // HashRouter,
} from "react-router-dom";

import HeaderContainer from "./Component/Header/HeaderContainer";
import { compose } from "redux";
import Preloader from "./Component/Common/Preloader/Preloader";
import { connect } from "react-redux";
import store, { AppStateType } from "./Redux/redux-store";
import { Provider } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import { UsersPage } from "./Component/Users/UsersConteiner";
import { Login } from "./Component/login/Login";

// import UsersConteiner from "./Component/Users/UsersConteiner";
// import News from "./Component/News/News";
// import Music from "./Component/Music/Music";
// import Settings from "./Component/Settings/Settings";
// import Friends from "./Component/Friends/Friends";
// import Login from "./Component/login/Login";
// import DialogsContainer from "./Component/Dialogs/DialogsConteiner";
// import ProfileContainer from "./Component/Profile/ProfileContainer";

const News = React.lazy(() => import("./Component/News/News"));

const Music = React.lazy(() => import("./Component/Music/Music"));

const Settings = React.lazy(() => import("./Component/Settings/Settings"));
// const Friends = React.lazy(() => import("./Component/Friends/Friends"));

const DialogsContainer = React.lazy(() =>
  import("./Component/Dialogs/DialogsConteiner")
);
const ProfileContainer = React.lazy(() =>
  import("./Component/Profile/ProfileContainer")
);



function withRouter(Component:any) {
  function ComponentWithRouterProp(props:any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp:()=>void
}
class App extends Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp(); 
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/Profile/"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <ProfileContainer />
                </Suspense>
              }
            >
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route
              path="/Dialogs/"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <DialogsContainer />
                </Suspense>
              }
            >
              <Route path=":userId" element={<DialogsContainer />} />
            </Route>
            <Route
              path="/users"
              element={
                <Suspense fallback={<Preloader />}>
                  <UsersPage pageTitle="Useri"  />
                </Suspense>
              }
            />

            <Route
              path="/News"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path="/Music"
              element={
                <Suspense fallback={<Preloader />}>
                  <Music />
                </Suspense>
              }
            />
            <Route
              path="/Settings"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="/Friends"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  {/* <Friends /> */}
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Login />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state:AppStateType) => ({
  initialized: state.app.initialized,
});
let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJsApp:React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default SamuraiJsApp;
