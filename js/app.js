//Selectores
const inputPaciente = document.querySelector('#paciente')
const inputPropietario = document.querySelector('#propietario')
const inputEmail = document.querySelector('#email')
const fechaImput = document.querySelector('#fecha')
const inputSintomas = document.querySelector('#sintomas')

const formulario = document.querySelector('#formulario-cita')

//Objeto cita
const citaObj ={
    paciente: '',
    propietario:'',
    email:'',
    fecha: '',
    sintomas: ''
}

//Eventos
inputPaciente.addEventListener('change',datosCitas);
inputPropietario.addEventListener('change',datosCitas);
inputEmail.addEventListener('change',datosCitas);
fechaImput.addEventListener('change',datosCitas);
inputSintomas.addEventListener('change',datosCitas);
formulario.addEventListener('submit',citaSubmit)

//Funcion que detecta un cambio
const datosCitas = () => {
    // console.log(e.target.value); //donde estoy escribiendo .value el valor
    citaObj[e.target.name] = e.target.value;
}

const citaSubmit = (e) => {
    e.preventDefault();

    //Los valores del objeto -> si alguno de esos valores es ''
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        const noti = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return;
    }
}

class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;
    }
}