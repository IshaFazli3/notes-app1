const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header i");
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
  popupBox.classList.remove("show");
} );

function showNotes(){
  notes.forEach((note) => {
    let liTag = `<li class="note">
                <div class="details">
                  <p>This is a Title</p>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sed delectus iusto provident voluptate earum impedit quia assumenda esse enim consequuntur, placeat, quae facere eaque nobis! Velit necessitatibus odio eius?
                  </span>
                </div>
                <div class="botton-content">
                    <span>April 3, 2022</span>
                    <div class="settings"></div>
                    <i class="il uil-ellipsis-h"></i>
                    <ul class="menu">
                    <li><i class="uil uil-pen"></i>Edit</li>
                    <li><i class="uil uil-trash"></i>Delete</li>
                  </ul>
                </div>
                </div>
              </li>`;
              addBox.insertAdjacentHTML("afterend", liTag);
  })
}
showNotes();

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
  }

});
