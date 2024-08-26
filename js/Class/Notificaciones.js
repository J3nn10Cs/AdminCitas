//Importaciones
import { formulario } from "../selectores.js";
//Clase notificacion
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
        
        //Agregar data-cy
        alerta.dataset.cy = 'alerta'

        //Insertar en el DOM -> parent ir al elemento padre / que inserto y antes de
        formulario.parentElement.insertBefore(alerta,formulario)
        
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export default Notificacion