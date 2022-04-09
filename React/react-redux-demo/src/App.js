import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/iceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
