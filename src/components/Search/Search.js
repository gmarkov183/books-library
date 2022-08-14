export const Search = () => {
    return(
        <div>
        <form className="search">
          <input
            className="search-input"
            type="search"
            autoComplete="off"
            placeholder="Search Books"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
    )
}



