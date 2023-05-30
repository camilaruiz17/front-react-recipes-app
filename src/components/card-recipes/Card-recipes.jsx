import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../card-recipes/Card-Recipes.css"
import FormRecipes from '../form-recipes/Form-recipes';
import { useEffect } from "react";
import { useState } from "react";
import { getRecipe } from '../../services/recipes.service';
import { Container } from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";

function ShowAll () {
  const [recipesArray, setFormRecipes] = useState(null);
  const navigate = useNavigate()

  
  const showFormRecipes = () => {
  getRecipe().then(
      response => {
          setFormRecipes(response.data)
      }
      ).catch(e => {
      console.log (e)
      }) 
  }
  useEffect(() => {
      showFormRecipes();
  }, [])
  
  return (
    <div>
      {
        recipesArray && recipesArray.map((recipe) => {
          return (
                  <Card id={recipe.id} refreshAction={showFormRecipes} className="CardCook"style={{ width: '25rem' }}>
                    <Card.Img src={recipe.imgRecipe}  variant="top" /> 
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                      {' '+ recipe.description}
                      </Card.Text>
                      <Button variant="primary" onClick={() => navigate('recipes/' + recipe.id)}>
                          Ver más
                      </Button>
                  </Card.Body>
                </Card>
          )
        })
      }
    
      </div>
)
};


export default ShowAll;