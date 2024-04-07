import { Provider } from "react-redux";
import "./App.css";
import ContentList from "./Section/ContentListSection";
import Footer from "./Section/FooterSection";
import Header from "./Section/HeaderSection";
import { categoryStore } from "./Store/CategoryStore";

function App() {
  return (
    <>
      <Provider store={categoryStore}>
        <Header />
        <ContentList />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
