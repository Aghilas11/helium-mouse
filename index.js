// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// window.addEventListener("mousemove", (e) => {
//cursor.style.left = e.pageX + "px";
//cursor.style.top = e.pageY + "px";
//});
//window.addEventListener("mousemove", (e) => {
//mouse1.style.left = e.pageX + "px";
//mouse1.style.top = e.pageY + "px";
//});
//window.addEventListener("mousemove", (e) => {
//mouse2.style.left = e.pageX + "px";
//mouse2.style.top = e.pageY + "px";
//});

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
