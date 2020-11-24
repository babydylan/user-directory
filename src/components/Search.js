import React from "react";


function Search(){
    return (
        <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label for="searchInput" className="sr-only">Password</label>
          <input type="search" className="form-control" id="inputSearch" placeholder="Search">
              </input>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Search</button>
      </form>
    );
}

export default Search; 