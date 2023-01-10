import { Link } from "react-router-dom";

function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link to={`/category/${idMeal}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    )
}

export {Meal};