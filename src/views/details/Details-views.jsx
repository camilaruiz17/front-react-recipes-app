import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getRecipe, getRecipeById } from "../../services/recipes.service";
import RecipeDetails from "../../components/details-recipes/DetailsRecipes";

const DetailsViews = () => {



    const { id } = useParams();

    const [recipeData, setRecipeData] = useState(null)

    const handleRegister = async () => {
        const { data } = await getRecipeById(id);
        setRecipeData(data);
        console.log(data)
    };

    useEffect(() => {
        handleRegister();
        console.log("recipes data", recipeData)
    }, [])


    

    return <div className="container_recipe_details">
        <RecipeDetails recipeData={[recipeData]} />
    </div>;
};

export default DetailsViews;

