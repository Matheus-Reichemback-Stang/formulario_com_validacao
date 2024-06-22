const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputEmail = document.getElementById('email');
const btnSubmit = document.getElementById('btnSubmit');

const errorNameField = document.getElementById('error-name');
const errorSurnameField = document.getElementById('error-surname');
const errorEmailField = document.getElementById('error-email');

const errorMessage = "É obrigatório preencher o campo!";
const errorNameMessage = "O campo só aceita 1 nome! E que não tenha espaços em branco!";
const errorNameMessageAndErrorSurnameMessage = `O campo deve ter no mínimo <b>3</b> caracteres!`;
const errorEmailMessage = `É obrigatório o campo conter o <b>@</b>!`;
const errorNumberMessage = "O campo não aceita números!";
const errorSpacesMessage = "O campo não pode conter espaços!";

let isFormValid = false;
let isNameValid = false;
let isSurnameValid = false;
let isEmailValid = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(isNameValid && isSurnameValid && isEmailValid){
        alert("Parabens você foi cadastrado")

        inputName.value = '';
        inputSurname.value = '';
        inputEmail.value = '';
    } else{
        alert('Preencha os campos')
    }
    
})

inputName.addEventListener('change', function(e){
    const fieldValue = e.target.value;
    const fieldValueInArray = fieldValue.split(' ');
    const isNumbers = [];

    for(value in fieldValue){
        if(!isNaN(fieldValue[value])){
            if(fieldValue[value] !== " "){
                isNumbers.push(fieldValue[value]);
            }
        }
    }

    if(isNumbers.length > 0){
        inputName.classList.add('error-input');
        errorNameField.innerHTML = errorNumberMessage;
        errorNameField.style.display = 'block';
        isNameValid = false;
    } else if(fieldValueInArray.length > 1 || fieldValue == " "){
        inputName.classList.add('error-input');
        errorNameField.innerHTML = errorNameMessage;
        errorNameField.style.display = 'block';
        isNameValid = false;
    } else if(fieldValue.length == 0){
        inputName.classList.add('error-input');
        errorNameField.innerHTML = errorMessage;
        errorNameField.style.display = 'block';
        isNameValid = false;
    } else if(fieldValue.length < 3 && fieldValue.length >= 1){
        inputName.classList.add('error-input');
        errorNameField.innerHTML = errorNameMessageAndErrorSurnameMessage;
        errorNameField.style.display = 'block';
        isNameValid = false;
    } else{
        inputName.classList.remove('error-input');
        errorNameField.innerHTML = '';
        errorNameField.style.display = 'none';
        isNameValid =  true;
    }
})

inputSurname.addEventListener('change', function(e){
    const fieldValue = e.target.value;
    const fieldValueInArray = fieldValue.split(' ');
    const isNumbers = [];

    for(value in fieldValue){
        if(!isNaN(fieldValue[value])){
            if(fieldValue[value] !== " "){
                isNumbers.push(fieldValue[value]);
            }
        }
    }
    
    if(isNumbers.length > 0){
        inputSurname.classList.add('error-input');
        errorSurnameField.innerHTML = errorNumberMessage;
        errorSurnameField.style.display = 'block';
        isSurnameValid = false;
    } else if(fieldValue.length == 0){
        inputSurname.classList.add('error-input');
        errorSurnameField.innerHTML = errorMessage;
        errorSurnameField.style.display = 'block';
        isSurnameValid = false;
    } else if(fieldValue.length < 3 && fieldValue.length >= 1){
        inputSurname.classList.add('error-input');
        errorSurnameField.innerHTML = errorNameMessageAndErrorSurnameMessage;
        errorSurnameField.style.display = 'block';
        isSurnameValid = false;
    } else{
        inputSurname.classList.remove('error-input');
        errorSurnameField.innerHTML = '';
        errorSurnameField.style.display = 'none';
        isSurnameValid = true;
    }
    
})

inputEmail.addEventListener('change', function(e){
    const fieldValue = e.target.value;
    const fieldValueInArray = fieldValue.split(' ');
    const hasArroba = fieldValue.search('@');
    const isNumbers = [];

    for(value in fieldValue){
        if(!isNaN(fieldValue[value])){
            if(fieldValue[value] !== " "){
                isNumbers.push(fieldValue[value]);
            }
        }
    }

    console.log(hasArroba)
    if(fieldValueInArray.length > 1 || fieldValue == " "){
        inputEmail.classList.add('error-input');
        errorEmailField.innerHTML = errorSpacesMessage;
        errorEmailField.style.display = 'block';
        isEmailValid = false;
    }
    else if(hasArroba == -1){
        inputEmail.classList.add('error-input');
        errorEmailField.innerHTML = errorEmailMessage;
        errorEmailField.style.display = 'block';
        isEmailValid = false;
    } else if(fieldValue.length == 0){
        inputEmail.classList.add('error-input');
        errorEmailField.innerHTML = errorMessage;
        errorEmailField.style.display = 'block';
        isEmailValid = false;
    } else{
        inputEmail.classList.remove('error-input');
        errorEmailField.innerHTML = '';
        errorEmailField.style.display = 'none';
        isEmailValid =  true;
    }
    
})