import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
}

export { Category };
