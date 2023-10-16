const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "Febuary", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});
closeIcon.addEventListener("click", () => {
  titleTag.value = "";
  descTag.value = "";
  addBtn.innerText = "Add a Note";
  popupTitle.innerText = "Add a Note";
  popupBox.classList.remove("show");
} );

function showNotes(){
  document.querySelectorAll(".note").forEach(note => note.remove());
  notes.forEach((note, index) => {
    let liTag = `<li class="note">
                <div class="details">
                  <p>${note.title}</p>
                  <span>${note.description}</span>
                </div>
                <div class="botton-content">
                    <span>${note.date}</span>
                    <div class="settings"></div>
                    <i onclick="showMenu(this)" class="uil-uil-ellipsis-h"></i>
                    <ul class="menu">
                    <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li>
                    <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                  </ul>
                </div>
                </div>
              </li>`;
              addBox.insertAdjacentHTML("afterend", liTag);
  })
}
function deleteNote(noteId) {
 notes.splice(noteId, 1); 
 localStorage.setItem("notes", JSON.stringify(notes));
 showNotes();
}

showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", e => {
    if(e.target.tagName != "I" || e.target !+ elam) {
      elam.parentElement.classList.remove("show");
    }
  })
}
function updateNote(noteId, title, desc){
  addBox.click();
  addBtn.innerText = "Update Note";
  popupTitle.innerText = "Updatea  Note";
  console.log(noteId, title, desc);

console.log(noteId, title, desc);
}


addBtn.addEventListener("click", e => {
  e.preventDefault();
  let noteTitle = titleTag.value,
  noteDesc = descTag.value;

  if(noteTitle || noteDesc) {
    let dateObj = new Date(), 
    month = months[dateObj.getMonth()], 
    day = dateObj.getDate(),
    year = dateObj.getFullYear();

    let noteInfo = {
      title: noteTitle, description: noteDesc,
      date: `${month} ${day}, ${year}`
    }
   
   notes.push(noteInfo);
   localStorage.setItem("notes", JSON.stringify(notes));
   closeIcon.click();
   showNotes();
  }

});
