//Selectores
const inputPaciente = document.querySelector('#paciente')
const inputPropietario = document.querySelector('#propietario')
const inputEmail = document.querySelector('#email')
const fechaImput = document.querySelector('#fecha')
const inputSintomas = document.querySelector('#sintomas')

//Objeto cita
const citaObj ={
    paciente: '',
    propietario:'',
    email:'',
    fecha: '',
    sintomas: ''
}

inputPaciente.addEventListener('change', (e) => {
    // console.log(e.target.value); //donde estoy escribiendo .value el valor
    citaObj.paciente = e.target.value;
})

console.log(citaObj);