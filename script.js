// AÑO AUTOMÁTICO
document.getElementById("year").textContent = new Date().getFullYear();


// MENÚ MÓVIL
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// CERRAR MENÚ AL HACER CLIC EN UN ENLACE
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// INFORMACIÓN DE LAS TARJETAS
const information = {

  productos: {
    icon: "🛍️",
    title: "Productos y servicios",
    text: "Esta sección permitirá mostrar productos y servicios ofrecidos por emprendedores y negocios de la comunidad de Sausal."
  },

  lugares: {
    icon: "📍",
    title: "Lugares de Sausal",
    text: "Aquí se podrán incorporar lugares importantes de la comunidad, junto con información que ayude a conocerlos y ubicarlos."
  },

  actividades: {
    icon: "🎉",
    title: "Actividades",
    text: "Esta sección estará destinada a informar sobre actividades, eventos y acontecimientos importantes de la comunidad."
  }

};


// ABRIR MODAL
function showInfo(type) {

  const data = information[type];

  document.getElementById("modalIcon").textContent = data.icon;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalText").textContent = data.text;

  document.getElementById("modal").classList.add("active");
}


// CERRAR MODAL
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}


// CERRAR HACIENDO CLIC FUERA
document.getElementById("modal").addEventListener("click", (event) => {

  if (event.target.id === "modal") {
    closeModal();
  }

});


// CERRAR CON ESC
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// ANIMACIÓN SUAVE DE ENTRADA
const cards = document.querySelectorAll(".card, .culture-box");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });

  },
  {
    threshold: 0.15
  }
);


cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(card);

});
