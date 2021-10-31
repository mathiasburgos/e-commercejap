      document.addEventListener("DOMContentLoaded", function(e){
      showData();
      document.getElementById("saveProfile").addEventListener("click", function() {
      guardarData();
      showData();
    });
  });
    

    function showData(){
 
        document.getElementById("profileName").value = JSON.parse(localStorage.getItem('fName'));
        document.getElementById("profileSN").value = JSON.parse(localStorage.getItem('fSecName'));
        document.getElementById("profileAge").value = JSON.parse(localStorage.getItem('fAge'));
        document.getElementById("profileEmail").value = JSON.parse(localStorage.getItem('fEmail'));
        document.getElementById("profileNumber").value = JSON.parse(localStorage.getItem('fNumber'));

    };

    function guardarData(){
      let formName = document.getElementById("profileName").value;
      let formSecName = document.getElementById("profileSN").value;
      let formAge = document.getElementById("profileAge").value;
      let formEmail = document.getElementById("profileEmail").value;
      let formNumber = document.getElementById("profileNumber").value;
      localStorage.setItem('fName', JSON.stringify(formName));
      localStorage.setItem('fSecName', JSON.stringify(formSecName));
      localStorage.setItem('fAge', JSON.stringify(formAge));
      localStorage.setItem('fEmail', JSON.stringify(formEmail));
      localStorage.setItem('fNumber', JSON.stringify(formNumber));
    };







           // let guardados = JSON.parse(localStorage.getItem('guardarPerfiles'));
        // formHtml = document.getElementById('guardarPerfil');
        // formHtml = guardados;

    //   let savedForm = localStorage.getItem('guardarPerfil');
    //   let formulario = document.getElementById("guardarPerfil")
    //   savedForm = JSON.parse(savedForm);
    //   formulario.innerText = formulario.innerText + '' + savedForm;
    // 
          // miPerfil = {
      //   Nombres: formName,
      //   Apellidos: formSecName,
      //   Edad: formAge,
      //   Email: formEmail, 
      //   Teléfono: formNumber
      // };
      // localStorage.setItem('guardarPerfiles', JSON.stringify(miPerfil));
      // showData();

    // function guardarPerfil (fName, fSecName, fAge, fEmail, fNumber){
    //     var nuevoFormulario = {
    //         nombres : fName,
    //         apellidos : fSecName,
    //         edad : fAge,
    //         email : fEmail,
    //         telefono : fNumber
    //     };
    //     console.log(nuevoFormulario);
    //     formList.push(nuevoFormulario);
    //     localStorageFormList(formList);
    // };

    // function getGuardarPerfil(){
    //     var storedList = localStorage.getItem('localFormList');
    //     if (storedList == null){
    //         formList = [];
    //     }
    //     else{
    //         formList = JSON.parse(storedList);
    //     }
    //     return formList;
    // };

    // function localStorageFormList(plist){
    //     localStorage.setItem('localFormList', JSON.stringify((plist))); 
    // }
    



//     document.getElementById("saveProfile").addEventListener("click", function() {
//       var form = document.getElementById('guardarPerfil').elements;
//       for(var i = 0; i<= form.length - 1; i++){
//           if(form[i].type == ('text' || 'number')){
//               console.log(form[i].value);
//               localStorage.setItem('guardarPerfil', JSON.stringify(form[i].value));
//           }
//           }
//           showForm();
//       });

// function  showForm(){
//     let datosPerfil = document.getElementById('guardarPerfil');
//     savedProfileForm = localStorage.getItem('guardarPerfil')
//     if (datosPerfil){
//         savedProfileForm = JSON.parse(savedProfileForm);
//         datosPerfil.innerText = datosPerfil.innerText + `` + savedProfileForm;
//     }
// };
      












  //     if (formName.value === '') {
  //       formName.classList.add("invalid");
  //       camposCompletos = false;
  //     } else {
  //       formName.classList.remove("invalid");
  //     }
  //     if (formSecName.value === '') {
  //       formSecName.classList.add("invalid");
  //       camposCompletos = false;
  //     } else {
  //       formSecName.classList.remove("invalid");
  //     }
  //     if (formAge.value === 0){
  //       formAge.classList.add("invalid");
  //       camposCompletos = false;
  //     }
  //     else{
  //       formAge.classList.remove("invalid")
  //     };
  //     if (formEmail.value === ""){
  //       formEmail.classList.add("invalid");
  //     }
  //     else{
  //       formEmail.classList.remove("invalid");
  //     }
  //     if (formNumber === 0){
  //       formNumber.classList.add("invalid")
  //     }
  //     else{
  //       formNumber.classList.remove("invalid");
  //     }
  //     if (camposCompletos) {
  //       localStorage.setItem('validatedForm', JSON.stringify({}));
  //       window.location = "main.html";
  //     } else {
  //       alert("Ingresar los datos por favor");
  //     }
     


       // function validateForm(){
  //     let formName = document.getElementById("profileName").value;
  //     let formSecName = document.getElementById("profileSN").value;
  //     let formAge = document.getElementById("profileAge").value;
  //     let formEmail = document.getElementById("profileEmail").value;
  //     let formNumber = document.getElementById("profileNumber").value;
  //     var formData = formName + formSecName + formAge + formEmail + formNumber;
  // };