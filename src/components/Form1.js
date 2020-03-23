import React,{useState, Fragment} from 'react';

//construccion html del componente
const Formulario1 = () =>{

let [datos, setDatos] = useState({
    nombre : "",
    colegio : "",
    grado : ""
}) 

    let cambio = (event) => {
        console.log(event.target.value)
         setDatos({
             
             ...datos,
             [event.target.name] : event.target.value
        })   
    }


    return(
        <div id="datoUsuario" className="container  p-4  ">
        <div className="row  justify-content-center align-items-center  ">
            <div className="col-md"></div>
                <div className="col-sm ">
                    <div className="row mb-4">
                        <input type="text" onChange={cambio} name="nombre" id="nombreAlumno" className="form-control" placeholder="Cual es tu Nombre?" aria-label="Username" aria-describedby="basic-addon1" required/>                                                                          
                    </div>                 
                </div>
                <div className=" col-md"></div>                   
        </div>        
        <div className="row  justify-content-center align-items-center  ">
            <div className="col-md"></div>
                <div className="col-sm ">
                    <div className="row mb-4">
                        <select onChange={cambio} className="custom-select form-control " name="colegio" id="selcColegio" >
                            <option selected>Cual es tu Colegio?</option>
                            <option selected="Colegio Cristo es Rey">Colegio Cristo es Rey</option>
                            <option selected="Colegio Emanuel">Colegio Emanuel</option>
                            <option selected="Colegio Natanael">Colegio Natanael</option>
                            <option selected="Colegio Victoria">Colegio Victoria</option>
                        </select>                                                                          
                    </div>                 
                </div>
                <div className=" col-md"></div>                   
        </div>       
        <div className="row  justify-content-center align-items-center  ">
            <div className="col-md"></div>
                <div className="col-sm ">
                    <div className="row mb-4">
                        <select onChange={cambio} name="grado" className="custom-select form-control " id="selcNivel"  >
                            <option selected>Cual es tu Grado o Curso?</option>
                            <option selected="Primer Grado">Primer Grado</option>
                            <option selected="Segundo Grado">Segundo Grado</option>
                            <option selected="Tercer Grado">Tercer Grado</option>
                            <option selected="Cuarto Grado">Cuarto Grado</option>
                            <option selected="Quinto Grado">Quinto Grado</option>
                            <option selected="Sexto Grado">Sexto Grado</option>
                            <option selected="Septimo Grado">Septimo Grado</option>
                            <option selected="Octavo Grado">Octavo Grado</option>
                            <option selected="Noveno Grado">Noveno Grado</option>
                            <option selected="Primer Curso">Primer Curso</option>
                            <option selected="Segundo Curso">Segundo Curso</option>
                            <option selected="Tercer Curso">Tercer Curso</option> 
                        </select>                                                                           
                    </div>                 
                </div>
                <div className=" col-md"></div>                   
        </div>               
</div> 
    );

}

export default Formulario1;
