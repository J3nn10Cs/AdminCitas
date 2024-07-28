//Importaciones
import { generarId } from "./funciones.js";

//Objeto cita
export const citaObj ={
    id: generarId(),
    paciente: '',
    propietario:'',
    email:'',
    fecha: '',
    sintomas: ''
}


export let editando = {
    valre: false
}   
    