import search_icon from "../../assets/search.png";
import { type SearchBarProps } from "../../../data";

const SearchBar = ({ location, onSetLocation, sendLocationName }: SearchBarProps) => {
  return (
    <form className="search-bar" onSubmit={sendLocationName}>
      <input type="text" placeholder="Search" className="search-input" value={location} onChange={onSetLocation} />
      <button className="search-btn">
        <img src={search_icon} alt="search icon" className="search-img" />
      </button>
    </form>
  );
};

export default SearchBar;
