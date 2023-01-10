function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return <div classNameName="card">
  <div className="card-image">
    <img src={strCategoryThumb} alt={strCategory}/>
    <span className="card-title">{strCategory}</span>
  </div>
  <div className="card-content">
    <p>{strCategoryDescription}</p>
  </div>
  <div className="card-action">

  </div>
</div>
}

export { CategoryItem };