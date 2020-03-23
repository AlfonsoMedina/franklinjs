import React, {useState, Fragment} from 'react'



let Puntaje = () => {

let [puntos, setPuntos] = useState()
let usuario;

let actualizar = () => {
        if(localStorage.user != undefined){

        usuario = JSON.parse(localStorage.user)
        fetch('https://tare-online.firebaseio.com/alumno/'+usuario.uid+'.json')//direccion de la base de datos
        .then(res => res.json())
        .then(data =>{
    
          //console.log(data.punto);
          
          setPuntos(puntos = data.punto)
      })
                
    }else{ 
        console.log('esta vacia') 
    }
    
}

actualizar()

    return(
        <Fragment>
            <div id="estado" className="container  " >
                
                    <h1   className="display-2 vh-100 row align-items-center justify-content-center text-white m-0" data-toggle="tooltip" title="Puntos:
                        Recibirás 5 puntos por el simple echo de subir tu trabajo terminado, 
                        una ves corregido se sumaran 5 puntos mas…. Si todo esta bien!!">Puntos {usuario ? puntos : 0}</h1>
                

            </div>
        </Fragment>

    );
}

export default Puntaje

