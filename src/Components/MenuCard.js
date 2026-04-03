const MenuCard = (Props) => {
  const { MenuData } = Props;

  const { name, areaName, costForTwoMessage } = MenuData;
  return (
    <>
      <div className="res-cards">
        <h6>{name}</h6>
        <h6>{areaName}</h6>
        <h6>{costForTwoMessage}</h6>
      </div>
    </>
  );
};

export default MenuCard;
