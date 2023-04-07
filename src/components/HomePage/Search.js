import "./Search.css"

function Search () {
    return (
        <div className="search-container">
            <form className="form">
                <input className="form-input" placeholder="Caută orice produs dorești ..." type="search"/>
                <button type="submit" aria-label="search" className="search-button">
                    <i className="search-img"></i>
                </button>
            </form>
        </div>
    )
};

export default Search;