//Importaciones
import { generarId } from "./funciones";
import type { Cita } from "./types";
//Objeto cita
export const citaObj : Cita ={
    id: generarId(),
    paciente: '',
    propietario:'',
    email:'',
    fecha: '',
    sintomas: ''
}


export let editando = {
    value: false
}   
    