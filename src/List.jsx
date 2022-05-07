import  Character  from "./Character";
const List = ({ charactersList }) => {
   return (
      <>
         {charactersList.map(character =>  {return <Character key={character.id} character={character} /> })
         }
      </>
   )
}
export default List