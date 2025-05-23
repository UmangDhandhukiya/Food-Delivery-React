const MenuItems = ({ menu }) => {
  console.log(menu);

  return (
    <div>
      {menu.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 border-gray-200 border-b-2">
          <h1>{item?.card?.info?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
