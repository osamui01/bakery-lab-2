const Cake = ({ cake }) => {
  return (
    <>
      <h2>{cake.cakeName}</h2>
      <ul>
        {cake.ingredients.map((ingredient, index) => (
          <li id={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Rating: {cake.rating}</p>
    </>
  );
};

export default Cake;
