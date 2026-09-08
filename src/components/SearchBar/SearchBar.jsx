

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search projects..."
        style={{ width: '97.5%' }}
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;