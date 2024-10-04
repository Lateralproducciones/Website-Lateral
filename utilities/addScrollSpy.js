const addScrollspy = (
  defalutClass = "",
  linksContainer = ".scrollspy-link",
  activeClass = "active"
) => {
  var section = document.querySelectorAll(".scrollSpysection");
  var sections = {};

  // Obtiene la posición del scroll
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Llenar el objeto sections con el id y la posición de las secciones
  Array.prototype.forEach.call(section, function (e) {
    // Usar getBoundingClientRect() para obtener la posición en relación al viewport
    const rect = e.getBoundingClientRect();
    sections[e.id] = rect.top + scrollPosition; // Agregar el scroll actual para obtener la posición absoluta
  });

  for (let i in sections) {
    if (sections[i] <= scrollPosition) {
      // Cambiar la clase del enlace activo
      document
        .querySelector(linksContainer + ` .${activeClass}`)
        ?.setAttribute("class", defalutClass);
      const navLink = document.querySelector(
        linksContainer + " a[href*=" + i + "]"
      );

      navLink?.setAttribute("class", `${defalutClass} ${activeClass}`);
    }
  }
};

export default addScrollspy;