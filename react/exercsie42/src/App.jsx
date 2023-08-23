import FilteredList from "./Component/FilteredList"

export default function App () {
  
  const data = [
    {id:1, name:'Mario' , age :19},
    {id:2, name:'Mario' , age :17},
    {id:3, name:'Mario' , age :190}
  ]
  
  return (  
    <>
    <h1>Filtered list</h1>
    <FilteredList list={data}/>
    </>
  )


}