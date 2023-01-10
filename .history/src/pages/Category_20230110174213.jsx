import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name);
  }, [name]);
}

export { Category };
