const Informacion = ({info}) => { 
   if (!info) {
      return <h1>No hay Ninguna Información Disponible</h1>
   }
   return (
      <div className="info_container">
         <h1>Page Details</h1>
          <p>{info.count}</p>
          <p>{info.pages}</p>
          <p>{info.next}</p>
          <p>{info.prev}</p>
      </div>
   )
}

export default Informacion;