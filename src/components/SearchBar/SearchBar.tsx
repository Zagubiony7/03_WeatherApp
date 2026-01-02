import search_icon from "../../assets/search.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-btn">
        <img src={search_icon} alt="search icon" className="search-img" />
      </button>
    </div>
  );
};

export default SearchBar;
