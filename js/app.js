
//Importaciones
import Notificacion from "./Class/Notificaciones.js"
import { inputEmail, inputPaciente, inputPropietario, inputSintomas, fechaImput, formulario, citasCont, submitForm } from "./selectores.js";

const generarId = () =>{
    return Math.random().toString(36).substring(2) + Date.now();
}

let editando = false;

//Objeto cita
const citaObj ={
    id: generarId(),
    paciente: '',
    propietario:'',
    email:'',
    fecha: '',
    sintomas: ''
}





//Funcion que detecta un cambio
const datosCitas = (e) => {
    // console.log(e.target.value); //donde estoy escribiendo .value el valor
    citaObj[e.target.name] = e.target.value;
}

//Instanciar 
const citas = new AdminCitas();

const citaSubmit = (e) => {
    e.preventDefault();
    //Los valores del objeto -> si alguno de esos valores es ''
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return;
    }

    if(editando){
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
    editando = false
}

//Reiniciar el objeto
function ReiniciarObjeto(){
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


const cargarEdicion = (cita) => {
    Object.assign(citaObj,cita)

    inputPaciente.value = cita.paciente
    inputPropietario.value = cita.propietario
    inputEmail.value = cita.email
    fechaImput.value = cita.fecha
    inputSintomas.value = cita.sintomas

    editando=true;

    submitForm.value = 'Actualizar Paciente'
}

//Eventos
inputPaciente.addEventListener('change',datosCitas);
inputPropietario.addEventListener('change',datosCitas);
inputEmail.addEventListener('change',datosCitas);
fechaImput.addEventListener('change',datosCitas);
inputSintomas.addEventListener('change',datosCitas);
formulario.addEventListener('submit',citaSubmit);