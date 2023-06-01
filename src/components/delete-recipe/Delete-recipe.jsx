import "../delete-recipe/Delete-recipe.css"
import { deleteRecipe } from "../../services/recipes.service"
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function DeleteRecipe({id, refreshAction}){
const handleDeleteRecipe = () => {
    Swal.fire("Borrar Receta", "Esta seguro de borrar la receta?", "question").then(
        res => {
            if (res.isConfirmed) {
                deleteRecipe(id).then(
                    res => {
                        Swal.fire("Receta borrada", "success").then(
                            () => {
                                refreshAction()
                            }
                        )
                    }
                ).catch(
                    err => {
                        Swal.fire("Borrado de receta", "Ha ocurrido un error", "error")
                    }
                )
            }
        }
    )
}
return (
    
    <div>
    <Tooltip title="Delete">
    <IconButton>
        {' '}<DeleteIcon fontSize="large" title="Borrar" color="disabled" className="delete-icon" onClick={handleDeleteRecipe}/>
        </IconButton>
        </Tooltip>
        </div>

)
}

export default DeleteRecipe