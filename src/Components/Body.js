import RestCards from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "../Utils/Shimmer";
import { restDetailsUrlFromSwiggyApi } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restNames, setRestNames] = useState([]); //this is array destructuring
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRealSwiggyData();
  }, []);

  const fetchRealSwiggyData = async () => {
    const data = await fetch(restDetailsUrlFromSwiggyApi);
    console.log(data);
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
        {filteredList.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            <RestCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
