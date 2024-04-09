import { Provider } from "react-redux";
import "./App.css";
import ContentListSection from "./section/ContentListSection";
import FooterSection from "./section/FooterSection";
import HeaderSection from "./section/HeaderSection";
import { categoryStore } from "./store/CategoryStore";

function App() {
  return (
    <>
      <Provider store={categoryStore}>
        <HeaderSection />
        <ContentListSection />
        <FooterSection />
      </Provider>
    </>
  );
}

export default App;
