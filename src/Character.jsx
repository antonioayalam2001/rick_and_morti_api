const Character = ({ character }) => { 
   if (!character) {
      return <h1>No hay ningun personaje Disponible en la lista :</h1>
   }
   return (
      <div className="character_card">
            <figure className="imagen">
              <img src={character.image} alt="Imagen Del personaje" className="img_char"></img>
            </figure>
         <div className="character_info">
              <p className="character_name">{character.name}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
         </div>
      </div>
   )
}

export default Character;