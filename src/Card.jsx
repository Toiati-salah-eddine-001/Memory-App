const Card = ({items,id,handelclick}) => {
  const itemClass = items.stat ? " active " + items.stat : "";
  return (
    <div className={"card "+itemClass} onClick={()=>{handelclick(id)}}>
        <img src={items.src} />
    </div>
  )
}

export default Card