import React, {useState, fragments} from 'react';
import firebase, { gmailLogin, logOut } from '../services/firebase';



const Head = () => {

let [user, setUser] = useState(null)

let login = ()=>{

    gmailLogin().then(usuario => { setUser(usuario) })

}

    return(

                <header className="header fixed-top border-bottom">
                    <div className='row pr-1'>
                    <div className="col-1">
                    <div id="logOut" >
                    <span>
                        <img  
                            width='50px' 
                            height="50px"  
                            src={user ? user.photoURL : 'log_piedad.png'} 
                            alt="..." 
                            className="rounded-circle mt-3 ml-3"/>   
                    </span>    
                    </div>
                    </div>
                    <div className="col-10 mt-2">
                            <p className="h3 text-center text-white mt-3 "> {user ? user.displayName : 'usuario'} | texto2 | texto3 | Informatica | Prof. Washington</p>
                    </div>
                    <div className="col-1">
                        <img 
                            onClick={login} 
                            width='70px' 
                            height="70px" 
                            src='log_piedad.png' 
                            alt="..." 
                            className="rounded-circle mr-3 mt-3"/>
                    </div>
                    </div>           
                </header>
 
            
    );
}

export default Head;
