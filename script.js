const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const noteId = button.getAttribute("aria-controls");
    const note = document.getElementById(noteId);
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "Mostra il dettaglio" : "Nascondi il dettaglio";
    note.hidden = isOpen;
  });
});

document.getElementById("anno").textContent = new Date().getFullYear();
