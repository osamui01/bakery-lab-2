import { useState } from "react";
import Cake from "../Components/Cake";
import CakeForm from "../Components/CakeForm";
// import CakeForm

const RecipeContainer = () => {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Lemon Drizzle",
      ingredients: [
        "eggs",
        "butter",
        "lemon  zest",
        "sugar",
        "self-raising flour",
      ],
      rating: 5,
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      rating: 3,
    },
    {
      cakeName: "Brownie",
      ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
      rating: 4,
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      rating: 5,
    },
  ]);

  const list = cakes.map((cake, index) => <Cake key={index} cake={cake} />);

  return (
    <>
      {list}
      <CakeForm cakes={cakes} setCakes={setCakes}/>
    </>
  );
};

export default RecipeContainer;
