import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";

function Category() {
  const { name } = useParams();

  useEffect(() => {
    getFilteredCategory(name);
  }, [name]);
}

export { Category };
