var tasks = [];

function idGenerator() {
    var timestamp = new Date();

    var id = 
             timestamp.getHours().toString() +
             timestamp.getMinutes().toString() +
             timestamp.getSeconds().toString() +
             timestamp.getMilliseconds().toString();

    return id;
}

function createTask(taskDes) {
    var task = {
        id: idGenerator(),
        data: {
            description: taskDes
        }
    };

    tasks.push(task);

}

var elemento

function deletarTask(id) {
    console.log(elemento);

    tasks = tasks.filter(task => task.id != id);

    updateScreen();
}