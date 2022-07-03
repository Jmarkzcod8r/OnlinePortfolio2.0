// import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Niche = (props)=> {
    return(
        <section className="Head_Points">
          <a href={props.link}> {props.Topic}</a>  
        </section>
    )
}
export default Niche