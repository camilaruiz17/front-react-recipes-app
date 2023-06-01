import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../card-recipes/Card-Recipes.css"
import FormRecipes from '../form-recipes/Form-recipes';
import { useEffect } from "react";
import { useState } from "react";
import { getRecipe } from '../../services/recipes.service';
import { Container } from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";


function ShareButtons({ recipe }) {
  const url = `https://myrecipes.com/recipes/${recipe.id}`;
  const text = `Mira esta deliciosa receta: ${recipe.title}`;

  return (
    <div>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Compartir en Facebook</a>
      <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Twitter</a>
      <a href={`https://pinterest.com/pin/create/button/?url=${url}&media=${recipe.image}&description=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Pinterest</a>
    </div>
  );
}

export default ShareButtons;


function ShareButtons({ recipe }) {
  const url = `https://myrecipes.com/recipes/${recipe.id}`;
  const text = `Mira esta deliciosa receta: ${recipe.title}`;

  return (
    <div>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Compartir en Facebook</a>
      <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Twitter</a>
      <a href={`https://pinterest.com/pin/create/button/?url=${url}&media=${recipe.image}&description=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Pinterest</a>
      <a href={`https://wa.me/?text=${text} ${url}`} target="_blank" rel="noopener noreferrer">Compartir en WhatsApp</a>
    </div>
  );
}
