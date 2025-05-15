function ItemSkill(props) {
  return (
    <div className="instruction-item">
      <img src={props.image} />
      <h2>{props.title}</h2>
    </div>
  );
}

export default ItemSkill;
