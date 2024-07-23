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



//Funcion que detecta un cambio
const datosCitas = (e) => {
    // console.log(e.target.value); //donde estoy escribiendo .value el valor
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj)
}


const citaSubmit = (e) => {
    e.preventDefault();

    //Los valores del objeto -> si alguno de esos valores es ''
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        const noti = new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })

        noti.mostrar();

        return;
    }
}

class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;
    }

    mostrar(){
        //Crear la notificiacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center','m-full','p-3','text-white','my-5','alert','uppercase', 'font-bold', 'text-sm');
        
        //si es de tipo error, agrega una clase ? -> entonces
        this.tipo = 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        //Mensaje de error
        alerta.textContent = this.texto

        //Insertar en el DOM -> parent ir al elemento padre / que inserto y antes de
        formulario.parentElement.insertBefore(alerta,formulario)

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//Eventos
inputPaciente.addEventListener('change',datosCitas);
inputPropietario.addEventListener('change',datosCitas);
inputEmail.addEventListener('change',datosCitas);
fechaImput.addEventListener('change',datosCitas);
inputSintomas.addEventListener('change',datosCitas);
formulario.addEventListener('submit',citaSubmit)