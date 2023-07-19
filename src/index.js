//1) IMPORTART LIBRERIAS
import React from "react";
//la libreria que define que es un componente y como funcionan juntos los componentes

import ReactDOM from "react-dom/client";
//libreria que sabe como hacer que un componente aparezca en el navegador

import App from "./App";

import './index.css'

//2)Obtenes una referencia al div con id root
const el = document.getElementById("root");


//3)Le decimos a React que tome control del elemento

const root = ReactDOM.createRoot(el);




//5) Mostrar el componente en pantalla
root.render(<App/>);
