//Importaciones
import { citasCont } from "../selectores.js";
import { cargarEdicion } from "../funciones.js";

//Clase citas
class AdminCitas{
    constructor(){
        this.citas = [];
    }

    agregar(cita){
        this.citas = [...this.citas,cita];
        this.mostrarCita();
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
        this.mostrarCita();
    }

    eliminar(id){
        this.citas = this.citas.filter( cita => cita.id !== id );
        this.mostrarCita();
    }

    mostrarCita(){
        //Limpiar Html
        while(citasCont.firstChild){
            citasCont.removeChild(citasCont.firstChild);
        }

        //Comporbar si hay citas
        if(this.citas.length===0){
            citasCont.innerHTML = `<h2 data-cy="citas-headinga" class="text-xl mt-5 mb-10 text-center">No Hay Pacientes comienza creado uno</h2>`
            return;
        }

        //Generar las citas
        this.citas.forEach(cita => {
            const {paciente,propietario,email,sintomas,fecha} = cita
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const pacienteP = document.createElement('p');
            pacienteP.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            pacienteP.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${paciente}`;
        
            const propietarioP = document.createElement('p');
            propietarioP.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietarioP.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${propietario}`;
        
            const emailP = document.createElement('p');
            emailP.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            emailP.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${email}`;
        
            const fechaP = document.createElement('p');
            fechaP.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fechaP.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${fecha}`;
        
            const sintomasP = document.createElement('p');
            sintomasP.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomasP.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${sintomas}`;

            //Boton editar
            const btnEditar = document.createElement('button');

            //Dataset de Cypress;
            btnEditar.dataset.cy = 'btn-editar';

            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            //Funcion para el boton editar
            const clone = structuredClone(cita);
            btnEditar.onclick = () => cargarEdicion(clone);

            //Boton eliminar
            const btnEliminar = document.createElement('button');
            //Dataset de Cypress;
            btnEliminar.dataset.cy = 'btn-eliminar';

            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            //Funcion para eliminar
            btnEliminar.onclick = () => this.eliminar(cita.id);

            const contBoton = document.createElement('DIV');
            contBoton.classList.add('flex','justify-between','mt-10');

            contBoton.appendChild(btnEditar)
            contBoton.appendChild(btnEliminar)
        
            // Agregar al HTML
            divCita.appendChild(pacienteP);
            divCita.appendChild(propietarioP);
            divCita.appendChild(emailP);
            divCita.appendChild(fechaP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(contBoton)            
            citasCont.appendChild(divCita);
        });
    }
}

export default AdminCitas