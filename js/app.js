
//Selectores
const inputPaciente = document.querySelector('#paciente')
const inputPropietario = document.querySelector('#propietario')
const inputEmail = document.querySelector('#email')
const fechaImput = document.querySelector('#fecha')
const inputSintomas = document.querySelector('#sintomas')

const citasCont = document.querySelector('#citas');
const formulario = document.querySelector('#formulario-cita')

//Clase citas
class AdminCitas{
    constructor(){
        this.citas = [];
    }

    agregar(cita){
        this.citas = [...this.citas,cita];
        this.mostrarCita();
    }

    mostrarCita(){
        //Limpiar Html
        while(citasCont.firstChild){
            citasCont.removeChild(citasCont.firstChild);
        }

        //Generar las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            const contBoton = document.createElement('DIV');
            contBoton.classList.add('flex','justify-between','mt-10');

            contBoton.appendChild(btnEditar)
            contBoton.appendChild(btnEliminar)
        
            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contBoton)            
            citasCont.appendChild(divCita);
        });
    }
}

//Clae notificacion
class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }
    
    mostrar(){
        //Crear la notificiacion
        const alerta = document.createElement('div');
        alerta.classList.add('text-center','m-full','p-3','text-white','my-5','alert','uppercase', 'font-bold', 'text-sm');

        //Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');

        //-> ? si existe lo elimina
        alertaPrevia?.remove();
        
        //si es de tipo error, agrega una clase ? -> entonces
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');
        
        //Mensaje de error
        alerta.textContent = this.texto
        
        //Insertar en el DOM -> parent ir al elemento padre / que inserto y antes de
        formulario.parentElement.insertBefore(alerta,formulario)
        
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

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

    //Agregamos una cita -> le pasamos una copia para que no reescriba
    citas.agregar({...citaObj});

    //Reiniciar el formulario
    formulario.reset();

    ReiniciarObjeto();

    new Notificacion({
        texto: 'Paciente registrado',
        tipo: 'exito'
    })
    return;

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
        paciente: '',
        propietario:'',
        email:'',
        fecha: '',
        sintomas: ''
    })

}

//Eventos
inputPaciente.addEventListener('change',datosCitas);
inputPropietario.addEventListener('change',datosCitas);
inputEmail.addEventListener('change',datosCitas);
fechaImput.addEventListener('change',datosCitas);
inputSintomas.addEventListener('change',datosCitas);
formulario.addEventListener('submit',citaSubmit);