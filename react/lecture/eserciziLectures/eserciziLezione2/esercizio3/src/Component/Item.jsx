function Item (props) {
  const items = props.items;
  return (
    <>
       {items.length>0 ? (
        <ul>
            {items.map((item, index)=>(
                <li key={item}> {index}</li>
            ))}
        </ul>
       ):(
        <p>Nessun elemento nella lista.</p>
       )}
    </>
  );
  
}
export default Item