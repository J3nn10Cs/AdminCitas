
//Importaciones
// import Notificacion from "./Class/Notificaciones.js"
// import AdminCitas from "./Class/AdminCitas.js";
import { inputEmail, inputPaciente, inputPropietario, inputSintomas, fechaImput, formulario, citasCont, submitForm } from "./selectores.js";
import { datosCitas,citaSubmit } from "./funciones.js";


//Eventos
inputPaciente.addEventListener('change',datosCitas);
inputPropietario.addEventListener('change',datosCitas);
inputEmail.addEventListener('change',datosCitas);
fechaImput.addEventListener('change',datosCitas);
inputSintomas.addEventListener('change',datosCitas);
formulario.addEventListener('submit',citaSubmit);