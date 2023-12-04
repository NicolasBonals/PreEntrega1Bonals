//props: son argumentos que se pasan del componente padre al hijo
const ItemListContainer = ({greeting}) => {
  return (
    <div style={{fontFamily: "Georgia", fontWeight: "lighter", fontSize: "45px", color: "darkblue", textAlign: "center"}}>{greeting}</div>
  )
}

export default ItemListContainer