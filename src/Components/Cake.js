import "../styles/cakeStyles.css"
const Cake = ({ cake }) => {
  return (
    <>
    <div class="grid-container">
        <h2>{cake.cakeName}</h2>
        <ul class="cake-list">
          {cake.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Rating: {cake.rating}</p>
      </div>
    </>
  );
};

export default Cake;
