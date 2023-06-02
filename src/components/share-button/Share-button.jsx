import "../share-button/Share-button.css"

function ShareButtons({ recipe }) {
  const url = `https://myrecipes.com/recipes/${recipe.id}`;
  const text = `Mira esta deliciosa receta: ${recipe.title}`;

  return (
    <div>
      <a className="share-button facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Compartir en Facebook</a>
      <a className="share-button whatsapp" href={`https://wa.me/?text=${text} ${url}`} target="_blank" rel="noopener noreferrer">Compartir en WhatsApp</a>
      <a className="share-button twitter" href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Twitter</a>
      <a className="share-button pinterest" href={`https://pinterest.com/pin/create/button/?url=${url}&media=${recipe.image}&description=${text}`} target="_blank" rel="noopener noreferrer">Compartir en Pinterest</a>
    </div>
  );
}

export default ShareButtons;
