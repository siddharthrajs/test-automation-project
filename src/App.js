import "./App.css";
import AppBody from "./components/AppBody";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <AppBody />
    </Provider>
  );
}

export default App;
