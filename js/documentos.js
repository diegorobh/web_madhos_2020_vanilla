var tableDocumentsBody = document.getElementById("tableDocumentsBody");
var containerTablesDocs = document.getElementById("containerTablesDocs");
//var demoData = ["1", "2", "3", "4", "5", "6", "7", "8"];
var responseDB = [
    {
        id: 1,
        codigo: "a_485",
        titulo: "a1",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 1,
        cabecera_titulo: "Procedimientos"
    },
    {
        id: 2,
        codigo: "b_963",
        titulo: "b1",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 2,
        cabecera_titulo: "Formatos"
    },
    {
        id: 3,
        codigo: "a_945",
        titulo: "a2",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 1,
        cabecera_titulo: "Procedimientos"
    },
    {
        id: 4,
        codigo: "a_222",
        titulo: "a3",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 1,
        cabecera_titulo: "Procedimientos"
    },
    {
        id: 5,
        codigo: "b_315",
        titulo: "b2",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 2,
        cabecera_titulo: "Formatos"
    },
    {
        id: 6,
        codigo: "c_133",
        titulo: "c1",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 3,
        cabecera_titulo: "Plan de procesos"
    },
    {
        id: 7,
        codigo: "b_878",
        titulo: "b3",
        url: "./0087-FO-DLLO Descripcion del WS de Certifactura.pdf",
        cabecera_id: 2,
        cabecera_titulo: "Formatos"
    }
];

var responseRefactor = responseRefactor(responseDB);

function responseRefactor(response) {
    var arrayCategories = [];
    response.forEach(item => {
        var category = response.filter(itemCat => {
            return itemCat.cabecera_id == item.cabecera_id
        });
        arrayCategories.push(category);
    })
    arrayCategories = deleteRepeated(arrayCategories);
    return arrayCategories
}

function deleteRepeated(arrayCategories) {
    return Array.from(new Set(arrayCategories.map(JSON.stringify)), JSON.parse);
}

console.log(responseRefactor);

function renderTable(data, obj){
    var tables = "";
    data.forEach(element => {
        tables += tableTemplate(element)
    });
    obj.innerHTML = tables;    
}

function renderRows(category) {
    var rowContent = "";
    category.forEach(element => {
        rowContent += rowTemplate(element)
    });
    return rowContent;
}

function rowTemplate(element) {
    var row =
        "<tr>\n" +
        "<th scope = 'row' >" + element.codigo + "</th>\n" +
        "<td>" + element.titulo + "</td>\n" +
        "<td>\n" +
        "<button type='button'\n" +
        "onclick=\"initPDFViewer('" + element.url + "')\"\n" +
        "class='btn btn-outline-primary'>\n" +
        "<i class='fa fa-eye'></i>\n" +
        "</button>\n" +
        "<button type='button' class='btn btn-outline-success'>\n" +
        "<i class='fa fa-arrow-circle-down'></i>\n" +
        "</button>\n" +
        "</td>\n" +
        "</tr >\n ";
    return row
}

function tableTemplate(element) {
    var tableHeader =
        "<table class='table table-bordered'>\n" +
        "<thead>\n" +
        "<tr>\n" +
        "<th scope='col' colspan='3' class='title_table_gray'>" + element[0].cabecera_titulo + "</th>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<th scope='col' width='50px'>Código</th>\n" +
        "<th scope='col'>Nombre</th>\n" +
        "<th scope='col' width='114px'>Acciones</th>\n" +
        "</tr>\n" +
        "</thead>\n" +
        "<tbody>\n";
    var tableFooter = 
        "</tbody>\n" +
        "</table>\n";
    var tableContent = renderRows(element);
    var table = tableHeader + tableContent + tableFooter;
    return table
}

function fetchDocuments(areaId) {
    console.log("make the request here " + areaId);
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            // handle success
            var demoData = response.data;
            console.log("request done");
            console.log(response.data);
            renderTable(responseRefactor, containerTablesDocs);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function initDocuments(){
    var areaId = localStorage.getItem('areaId');
    fetchDocuments(areaId)
}

initDocuments();
//fetchDocuments();