import { useState } from "react";

const CakeForm = ({cakes, setCakes}) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");

    return ( 
        <>
            <h2>Enter New Cake Recipes</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="cakeName"
                    placeholder="Enter cake name here..."
                    value={cakeName}
                    onChange={(event) => setCakeName(event.target.value)}
                />
                <input 
                    type="text"
                    name="ingredients"
                    placeholder="Enter ingredients here..."
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value.split(", "))}
                />
                <input 
                    type="text"
                    name="rating"
                    placeholder="Enter rating here..."
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input type="Submit" value="submit"/>
            </form>
        </>
     );
}
 
export default CakeForm;