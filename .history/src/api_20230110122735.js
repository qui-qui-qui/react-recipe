import { API_URL } from "./config";

const getMealById = (mealId) => {
    fetch(API_URL + 'lookup.php?i=' + mealId)
}