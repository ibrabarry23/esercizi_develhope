import { useMemo } from "react";

export default function FilteredList({list}){

    const lista = useMemo (
        ()=> list.filter((item)=> item.age >18 ),
        [list]
    )
    return(

        <>
        <ul>
            {lista.map((item)=>(
          <li key={item.id}> name: {item.name}, age: {item.age}, id: {item.id}</li>
          ))}
        </ul>
        </>
    )
}