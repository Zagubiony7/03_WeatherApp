import search_icon from "../../assets/search.png";
import { type SearchBarProps } from "../../../data";

const SearchBar = ({ location, onSetLocation }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" value={location} onChange={onSetLocation} />
      <button className="search-btn">
        <img src={search_icon} alt="search icon" className="search-img" />
      </button>
    </div>
  );
};

export default SearchBar;
