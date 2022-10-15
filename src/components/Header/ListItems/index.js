import "./styles.css";
import { MdKeyboardArrowDown} from "react-icons/md";
// MdKeyboardArrowDown
const ListItems = () => {
  const menuItems = ["shop" ,
   "fabric", "journal", "about"];

  return (
    <div className="menu-items">
      <p className="mat">matter</p>
      {menuItems.map((item) => (
        <div className="itm">
          <p className="itmn">{item}</p>
          <p className="down"><MdKeyboardArrowDown/></p>
          </div>
      ))}
    </div>
  );
};

export default ListItems;