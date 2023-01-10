import 

function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    )
}

export {Meal};