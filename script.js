const addButton = document.querySelector("#add-note");
const currentNote = document.querySelector("#note");
const allNotes = document.querySelector("#your-notes");

async function loadNotes() {
  const response = await fetch("/notes");
  const data = await response.json();

  allNotes.innerHTML = ""; // remover the Loading... from screen

  data.notes.forEach((note) => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note;
    allNotes.append(noteElement);
  });
}

addButton.addEventListener("click", async () => {
  const note = currentNote.value.trim();

  if (note === "") return;

  const response = await fetch("/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      note: note, // currentNote.value
    }),
  });

  const data = await response.json();
  console.log(data);

  currentNote.value = "";
  await loadNotes();
});

loadNotes();
