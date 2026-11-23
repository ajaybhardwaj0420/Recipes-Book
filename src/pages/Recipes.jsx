// import React from 'react'

import { useContext } from "react";
import { datacontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(datacontext);

  const renderrecipe = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ));

  return <div>{renderrecipe}</div>;
};

export default Recipes;
