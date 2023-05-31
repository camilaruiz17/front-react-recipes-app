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
        <FormRecipes/>
        </div>
    )
    }
    
    export default CreateRecipes