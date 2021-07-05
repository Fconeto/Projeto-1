function newTask() {
    var taskDes = document.getElementById("newTask").value;

    createTask(taskDes)

    updateScreen();
}

function updateScreen() {
    var list = "<ul>";

    tasks.forEach(task => {
        list += "<li id-data=" + task.id + ">" + task.data.description + "</li>";
        list +=
         "<button onclick = removerTask(this) id-data=" +
          task.id + 
          ">Apagar</button>";
    });

    list += "</ul>"

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

function removerTask(elemento) {
    console.log(elemento);

    var id = elemento.getAttribute("id-data");

    deletarTask(id);
    updateScreen();
}