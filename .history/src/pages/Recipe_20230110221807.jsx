import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const {goBack} = use
    const {id} = useParams();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    })
}

export {Recipe};