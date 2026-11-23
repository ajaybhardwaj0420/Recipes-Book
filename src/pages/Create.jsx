// import React from 'react'

import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    // const copydata = { ...data };
    // copydata.push(recipe);
    // setData(copydata);

    setData([...data, recipe]);
    reset();
  };

  return (
    <form className="ml-10 gap-5" onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="border-b outline-0 p-2 "
        {...register("image")}
        type="url"
        placeholder="enter Image url"
      />
      <p></p>
      <input
        className="border-b outline-0 p-2 "
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
      <p>
        {" "}
        <small className="text-red-400"></small>
      </p>
      <textarea
        className="border-b outline-0 p-2 "
        {...register("description")}
        type="text"
        placeholder="start here"
      />
      <p>
        <small className="text-red-400">hi</small>
      </p>
      <textarea
        className="border-b outline-0 p-2 "
        {...register("ingredients")}
        type="text"
        placeholder="// write the ingredients separated by coma"
      />
      <p>
        <small className="text-red-400">hi</small>
      </p>
      <textarea
        className="border-b outline-0 p-2 "
        {...register("instruction")}
        type="text"
        placeholder="// write Instruction separated by coma"
      />
      <p></p>
      <select
        className="border-b outline-0 p-2 "
        {...register("Category")}
        type="text"
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="mt-5 block bg-gray-900 rounded-2xl px-2 py-2">
        Save Recipes
      </button>
    </form>
  );
};

export default Create;
