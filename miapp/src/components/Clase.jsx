import React from 'react';
import ReactDOM, { render } from 'react-dom';


const clases=['Clase1', 'Clase2', 'Clase3', 'Clase4']

class Clase extends React.Component{

  

  render(){
    return  (
      clases.map((nombreClase, index) =>(
        
         
        <li  key={index} > 
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id={nombreClase} autocomplete="off" />
            <label class="btn btn-outline-primary" for="btnradio1">{nombreClase}</label>
          </div>
        </li>
      ))
    )
  }
}

export default Clase