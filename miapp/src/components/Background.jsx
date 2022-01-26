import React from 'react';
import ReactDOM, { render } from 'react-dom';


const backgrounds=['B1', 'B2', 'B3', 'B4']
class Background extends React.Component{

  

    render(){
      return  (
        backgrounds.map((nombreBackground, index) =>(
        
         
            <li  key={index} > 
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id={nombreBackground} autocomplete="off" />
                <label class="btn btn-outline-primary" for="btnradio1">{nombreBackground}</label>
              </div>
            </li>
          ))
      )
    }
}
  
  export default Background