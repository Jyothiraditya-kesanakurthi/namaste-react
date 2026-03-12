import { RES_IMG_SRC } from "../Utils/Constants";

const RestCards = (Props) => {
  const { resData } = Props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } =
    resData; // this is deconstructing in js

  return (
    <>
      <div className="res-cards">
        <img src={RES_IMG_SRC + cloudinaryImageId}></img>

        <h6>{name}</h6>
        <h6>{areaName}</h6>
        <h6>{cuisines}</h6>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </>
  );
};

export default RestCards;
