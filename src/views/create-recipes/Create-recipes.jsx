import { useEffect } from "react"
import FormRecipes from "../../components/form-recipes/Form-recipes"
import { useNavigate } from "react-router-dom"

function CreateRecipes(){
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/register/create')
        }
    })

    return (
        <div>
            <h2>Esta es la vista que esta en veremos</h2>
        <FormRecipes/>
        </div>
    )
    }
    
    export default CreateRecipes