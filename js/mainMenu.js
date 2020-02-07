const subMenuDocsContainer = document.getElementById("subMenuDocsContainer");

var subMenuDocuments = [
    {
        id:1,
        nombre:"Bod. Osteosíntesis",
    },
    {
        id:2,
        nombre:"Insumos",
    },
    {
        id:3,
        nombre:"Importaciones",
    },
    {
        id:4,
        nombre:"Control Interno",
    },
    {
        id:5,
        nombre:"Calidad",
    },
    {
        id:6,
        nombre:"Técnica",
    },
    {
        id:7,
        nombre:"Sistemas",
    }
];

function fetchSubMenuDocuments() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            // handle success
            var demoData = response.data;
            //renderRows(demoData, tableDocumentsBody);
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function renderSubMenuDocuments(data, obj){
    var linksGroup = "";
    data.forEach(element => {
        linksGroup += templateSubmenuDocuments(element)
    });
    obj.innerHTML = linksGroup
}

function templateSubmenuDocuments(item){
    var linkHtml = 
    "<a data-id='" + item.id + "' data-name='" + item.nombre + "' class='dropdown-item' onclick='saveSelectedArea(this)' href='javascript:void'>" + item.nombre + "</a>\n";
    return linkHtml
}

function saveSelectedArea(element){
    var id = element.getAttribute("data-id");
    var name = element.getAttribute("data-name");
    localStorage.setItem('areaName', name);
    localStorage.setItem('areaId', id);
    console.log(localStorage);
    window.location.href = './documentos.html';
}

renderSubMenuDocuments(subMenuDocuments, subMenuDocsContainer);
