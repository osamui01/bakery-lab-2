import { useState } from "react";
import Cake from "../Components/Cake";
import CakeForm from "../Components/CakeForm";
import SearchForm from "../Components/SearchForm";
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

  const [showList, setShowList] = useState(true);

  const handleShowList = () => {
    setShowList(false);
  };

  const handleDontShowList = () => {
    setShowList(true);
  };

  const list = cakes.map((cake, index) => <Cake key={index} cake={cake} />);

  return (
    <>
      <SearchForm
        cakes={cakes}
        handleShowList={handleShowList}
        handleDontShowList={handleDontShowList}
      />

      {showList ? list : <p>Test</p>}

      <CakeForm cakes={cakes} setCakes={setCakes} />
    </>
  );
};

export default RecipeContainer;
