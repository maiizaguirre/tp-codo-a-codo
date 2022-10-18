const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".list-menu");

//variables
const url = 'https://jsonplaceholder.typicode.com/users';
const respuesta = document.querySelector("#respuesta");
//evento
document.addEventListener("DOMContentLoaded", llamarAPI);


//funciones
function llamarAPI(){
  fetch(url)
  .then(resp => resp.json())
  .then((data) => mostrarHTML(data)) 
  }
function mostrarHTML(datos){
  datos.forEach(item => {
    const row = document.createElement('tr');
    // ` alt+96
    row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.address.city}</td>
    `
    respuesta.appendChild(row)
  });
}





navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});