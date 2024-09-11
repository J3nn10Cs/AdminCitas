import './style.css'
//Importaciones
import { inputEmail, inputPaciente, inputPropietario, inputSintomas, fechaImput, formulario } from "./selectores";
import { datosCitas,citaSubmit } from "./funciones";
import { createDataBase } from "./funciones";

window.onload = () => {
    createDataBase();
}

//Eventos ->  ? - en caso de que exista asignarle 
inputPaciente?.addEventListener('change',datosCitas);
inputPropietario?.addEventListener('change',datosCitas);
inputEmail?.addEventListener('change',datosCitas);
fechaImput?.addEventListener('change',datosCitas);
inputSintomas?.addEventListener('change',datosCitas);
formulario?.addEventListener('submit',citaSubmit);