import { useEffect, useState } from "react";
import { resMenuUrlFromSwiggy } from "../Utils/Constants";
import Shimmer from "../Utils/Shimmer";
import { useParams } from "react-router-dom";

const ResMenuCards = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRealSwiggyMenu();
  }, []);

  const fetchRealSwiggyMenu = async () => {
    const data = await fetch(resMenuUrlFromSwiggy + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
    //console.log(resInfo);
  };

  const info = resInfo?.data?.cards
    ?.map((c) => c.card?.card)
    ?.find((c) => c?.info)?.info;

  if (!info) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, costForTwoMessage } = info;

  //the find here because for few restaurrants the menu details in groupedCard[2] and for few in different
  //index to avoid it helps to find groupedCard in groupedCard where is cardGroupMap there.
  const regularCards = resInfo?.data?.cards?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const menuSection = regularCards?.find((c) => c?.card?.card?.itemCards);

  const itemCards = menuSection?.card?.card?.itemCards;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <p>
          {areaName}
          {cuisines.join(",")}
          {costForTwoMessage}
        </p>
        <h2>Menu :</h2>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - <span>Cost of Item =</span>{" "}
              {item.card.info.price || item.card.info.defaultPrice}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResMenuCards;
