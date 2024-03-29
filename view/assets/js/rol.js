function create() {
    let data = `txtRol=${document.getElementById("txtRol").value}`;

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }

    fetch("../controller/roles.create.php", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            read();
        })
}
function read() {
    fetch("../controller/rol.read.php")
        .then((response) => response.json())
        .then((data) => {
            let table = "";
            data.forEach((element, index) => {
                table += `<tr>`
                table += `<th scope="row">${index + 1}</th>`;
                table += `<td>${element.nombrerol}</td>`;
                table += `<td><div class="form-check form-switch">
                            <input onclick="updateEstado(${element.id},'${element.estado}')" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado =='A'?"Activo":"Inactivo"}</label>
                            </div>
                        </td>`;
                table += `<td>
                    <a class="btn btn-warning">Modificar</a>
                    <a class="btn btn-danger">Eliminar</a>
                </td>`;
                table += `</tr>`;
            });
            document.getElementById("tableBodyRol").innerHTML = table;
            readEstado();
        });
}
function readEstado(){
    let estado = document.getElementsByClassName("form-check-input");
    let lableEstado = document.getElementsByClassName("form-check-label");
    for (let i = 0; i < estado.length; i++) {
        if(lableEstado[i].innerHTML=="Activo"){
            estado[i].setAttribute("checked","");
        }
    }
}
function updateEstado(id,estado){
    const options = {
        method: "POST",
        body: `id=${id}&estado=${estado}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    fetch("../controller/rol.updateEstado.php", options)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        read();
    })
}
read();