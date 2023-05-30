import React from "react";
import "../details-recipes/DetailsRecipes.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RecipeDetails = ({ recipeData }) => {
    const baseUrl = import.meta.env.VITE_IMAGES_URL;
    return (
        recipeData && recipeData.map((recipe) => {
            return (
                <Card className= "editDetails" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={recipe ? recipe.imgRecipe : '...'} />
                <Card.Body>
                <Card.Title>{recipe ? recipe.title : '...'}</Card.Title>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Ingredientes: {recipe ? recipe.ingredients : '...'}</ListGroup.Item>
                <ListGroup.Item>Tiempo: {recipe ? recipe.timeCook : '...'}</ListGroup.Item>
                <ListGroup.Item>Porciones: {recipe ? recipe.portions : '...'}</ListGroup.Item>
                <ListGroup.Item>Pasos de la receta: {recipe ? recipe.description : '...'}</ListGroup.Item>
                </ListGroup>
                </Card.Body>
                
                </Card>
            )
        })
            
            
        
    )   
};

export default RecipeDetails