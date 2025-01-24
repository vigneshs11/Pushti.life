import React from 'react';

const MenuItem = ({ itemName, price = '', proteinContent = false, calories =false, ingredients = false }) => {
  return (
    <div className="col-lg-4 w-full">
  <div className="flex items-center justify-between">
    <h2 className="mt-4 text-orange-700 font-bold">{itemName}</h2>
    {price && <span className="text-black font-bold">₹ {price}</span>}
  </div>
  { calories && <p className="text-cyan-700">
    ({proteinContent}g Protein, {calories} kcal)
  </p> }
  { ingredients && <p className="text-gray-500">
    {ingredients}
  </p> }
</div>
  );
};

export default MenuItem;
