import swiggyData from "../Utils/MockData";
import RestCards from "./ResCards";
import { useState } from "react";

const Body = () => {
  const [restNames, setRestNames] = useState(swiggyData); //this is array destructuring
  return (
    <>
      <div className="filter-btn">
        <button
          className="ft-btn"
          onClick={() => {
            const filterdResList = restNames.filter(
              (res) => res.card.card.info.avgRating > 4,
            );

            setRestNames(filterdResList);
          }}
        >
          Filter High rated restarurnts
        </button>
      </div>
      <div className="next">
        {restNames.map((restarunt) => (
          <RestCards key={restarunt.card.card.info.id} resData={restarunt} />
        ))}
      </div>
    </>
  );
};

export default Body;
