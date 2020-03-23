import React, {useState, fragment} from 'react'


const Footer = () =>{


let subirArchivo = (e) => {

}


    return(
            <footer className="footer fixed-bottom border-top">
                    <div className="row">
                        <div className="col-sm  ml-3 mb-3">
            
                        </div>
                        <div className="col-md mb-3" id="cerrarya">
                                <div value="0" id="uploader" className="progress-bar mt-2" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">0%</div>
                                <input type="file"  id="fileButton" className="text-white mt-2" />
                        </div>
                        <div className="col-md"></div>
                    </div>



            </footer>        
    );
}

export default Footer