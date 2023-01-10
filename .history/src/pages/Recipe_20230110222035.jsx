import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { goBack } = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  );
}

export { Recipe };
