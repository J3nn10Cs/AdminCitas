//Importaciones
import { fechaImput,inputPaciente, inputPropietario, inputSintomas , inputEmail, submitForm, formulario} from "./selectores.js"
import { citaObj,editando } from "./variables.js"
import AdminCitas from "./Class/AdminCitas.js"
import Notificacion from "./Class/Notificaciones.js"

//Instanciar 
const citas = new AdminCitas();

export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export const cargarEdicion = (cita) => {
    Object.assign(citaObj,cita)
    inputPaciente.value = cita.paciente
    inputPropietario.value = cita.propietario
    inputEmail.value = cita.email
    fechaImput.value = cita.fecha
    inputSintomas.value = cita.sintomas

    editando.value = true;

    submitForm.value = 'Actualizar Paciente'
}

//Funcion que detecta un cambio
export const datosCitas = (e) => {
    // console.log(e.target.value); //donde estoy escribiendo .value el valor
    citaObj[e.target.name] = e.target.value;
}

export const citaSubmit = (e) => {
    e.preventDefault();
    //Los valores del objeto -> si alguno de esos valores es ''
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return;
    }

    if(editando.value){
        citas.editarCita({...citaObj})
        new Notificacion({
            texto: 'Paciente actualizado correctamente',
            tipo: 'exito'
        })
    }else{
        //Agregamos una cita -> le pasamos una copia para que no reescriba
        citas.agregar({...citaObj});
        new Notificacion({
            texto: 'Paciente registrado',
            tipo: 'exito'
        })
    }
    
    //Reiniciar el formulario
    formulario.reset();
    
    ReiniciarObjeto();
    
    submitForm.value = 'Registrar paciente'
    editando.value = false
}

//Reiniciar el objeto
export function ReiniciarObjeto(){
    // citaObj.paciente= '';
    // citaObj.propietario= '';
    // citaObj.email= '';
    // citaObj.fecha= '';
    // citaObj.sintomas= '';

    //copiar valores
    Object.assign(citaObj, {
        id:generarId(),
        paciente: '',
        propietario:'',
        email:'',
        fecha: '',
        sintomas: ''
    })

}

let DB;

export function createDataBase(){
    //Crear la bd en version 1.0
    const createDb = window.indexedDB.open('citas',1);

    //Si hay un error
    createDb.onerror = function(){
        console.log('Hubo un error');
    }

    //si todo sale bien
    createDb.onsuccess = function(){
        console.log('La db fue creada')
        DB = createDataBase.result;
    }

    //Definir el schema
    createDb.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas',{
            KeyPath: 'id',
            autoIncrement: true
        })

        //Definir todas las columnas
        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('Db creada y lista');   
    }
}