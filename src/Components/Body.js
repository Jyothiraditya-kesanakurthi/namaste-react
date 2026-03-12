import RestCards from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "../Utils/Shimmer";

const Body = () => {
  const [restNames, setRestNames] = useState([]); //this is array destructuring
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRealSwiggyData();
  }, []);

  const fetchRealSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7264454&lng=83.30594459999999&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
    );
    console.log("it will render after page rnders");

    const json = await data.json();
    const res_List = json?.data?.cards
      ?.slice(3)
      ?.map((c) => c?.card?.card?.info);
    console.log(res_List);

    setRestNames(res_List);
    setFilteredList(res_List);
  };

  return restNames.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter-btn">
        <div className="search-btn">
          <input
            type="text"
            className="searchBtnInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              const searchedResName = restNames.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredList(searchedResName);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="ft-btn"
          onClick={() => {
            const filterdResList = restNames.filter((res) => res.avgRating > 4);

            setFilteredList(filterdResList);
          }}
        >
          Filter High rated restarurnts
        </button>
      </div>
      <div className="next">
        {filteredList.map((restarunt) => (
          <RestCards key={restarunt.id} resData={restarunt} />
        ))}
      </div>
    </>
  );
};

export default Body;
