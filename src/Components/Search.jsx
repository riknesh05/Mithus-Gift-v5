import search_glass from '../assets/search_glass_1.svg'

function searchBar(){

    return <>
    <div className="search relative w-full">
       <input
              type="search"
              name="search"
              id="searchItem"
              placeholder="Search"
              className="placeholder-gray-500 rounded-md pl-10 p-2 w-full h-8 4 bg-neutral-200 "
            />
            <img
              src={search_glass}
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60"
            />
    </div>
    </>
}

export default searchBar;