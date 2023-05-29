import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../card-recipes/Card-Recipes.css"

function CardRecipe() {
  return (
    <Card className="CardCook"style={{ width: '50rem' }}>
      <Card.Img variant="top" src="https://i.blogs.es/1462bc/pollo-asado-arguinano2/1366_2000.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardRecipe;