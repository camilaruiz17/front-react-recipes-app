import React from "react";
import { getmyRecipe } from "../../services/recipes.service";
import "../profile/Profile.css"
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate} from "react-router-dom";
import DeleteRecipe from "../../components/delete-recipe/Delete-recipe";
    
const Profile = () => {

const [myrecipesArray, setmyRecipes] = useState(null);
const navigate = useNavigate()


const showmyRecipes = () => {
    getmyRecipe().then(
        response => {
            setmyRecipes(response.data)
    }
        ).catch(e => {
        console.log (e)
        }) 
    }
        useEffect(() => {
        showmyRecipes();
  }, [])
        
        return (
            myrecipesArray && myrecipesArray.map((recipe) => {
                return (
                    <Card id={recipe.id} refreshAction={showmyRecipes} className= "editDetails" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={recipe ? recipe.imgRecipe : '...'} />
                    <Card.Body>
                    <Card.Title>{recipe ? recipe.title : '...'}</Card.Title>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Descripción: {recipe ? recipe.description : '...'}</ListGroup.Item>
                    <ListGroup.Item>Tiempo: {recipe ? recipe.timeCook : '...'}</ListGroup.Item>
                    <ListGroup.Item>Porciones: {recipe ? recipe.portions : '...'}</ListGroup.Item>
                    <ListGroup.Item>Ingredientes: {recipe ? recipe.ingredients : '...'}</ListGroup.Item>
                    <ListGroup.Item>Pasos de la receta: {recipe ? recipe.instructions : '...'}</ListGroup.Item>
                    <DeleteRecipe id={recipe.id} refreshAction={showmyRecipes}/>
                    </ListGroup>
                    </Card.Body>
                    
                    </Card>
                    
                )
            })
                
                
            
        )   
    };
    
    export default Profile