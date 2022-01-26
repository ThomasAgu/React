import React from 'react';
import ReactDOM, { render } from 'react-dom';


const razas=['Raza1', 'Raza2', 'Raza3', 'Raza4']
class Raza extends React.Component{

  

    render(){
      return  (
        razas.map((nombreRaza, index) =>(
        
         
            <li  key={index} > 
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id={nombreRaza} autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio1">{nombreRaza}</label>
              </div>
            </li>
          ))
      )
    }
}
  
  export default Raza