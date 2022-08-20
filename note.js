console.log("hello helo hlo");
shownotes();
let addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function(e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesobj = [];
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesobj = [];
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += ` <div class="card">
        <div class="cardbody" >
            <h5 class="card-title">NOTE ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deletenote(this.id)" class="btn-one delbtn">Delete Note</button>
        </div>
    </div>`
    });
    let notel = document.getElementById("notes");
    if (notesobj != 0) {
        notel.innerHTML = html;
    } else {
        notel.innerHTML = `<h2>save your notes here</h2>`
    }


}


function deletenote(index)

{
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

}