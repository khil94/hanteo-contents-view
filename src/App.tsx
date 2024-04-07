import { Provider } from "react-redux";
import "./App.css";
import ContentListSection from "./Section/ContentListSection";
import FooterSection from "./Section/FooterSection";
import HeaderSection from "./Section/HeaderSection";
import { categoryStore } from "./Store/CategoryStore";

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
