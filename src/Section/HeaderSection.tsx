import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../Constants/Enum";
import { RootState } from "../Store/CategoryStore";
import "./HeaderSection.scss";

export default function HeaderSection() {
  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();

  return (
    <header id="header">
      <div className="header_wrapper">
        {CATEGORIES.map((v, i) => {
          return <div></div>;
        })}
      </div>
    </header>
  );
}
