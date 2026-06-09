const CardVehiculos=({nombre,dueño,matricula})=>{
   
    return( <article className={claseArticulo}>
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="card-text">{dueño}</p>
                    <p className="card-text">{matricula}</p>
                </div>
        
            </article>


    );
    
}
export default CardVehiculos;