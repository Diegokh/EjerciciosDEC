// variable global que fija un límite temporal
var t;

// Inicia el límite temporal a cada pulsación
function StartSearch() {
    if (t) window.clearTimeout(t);
    t = window.setTimeout("LiveSearch()", 200);
}

// Realiza la búsqueda
function LiveSearch() {
    // compone el nombre del archivo PHP
    query = document.getElementById("searchlive").value;
    filename = "search.php?query=" + query;

    // DisplayResults se ocupará de la respuesta Ajax
    ajaxCallback = DisplayResults;

    // Envía la petición Ajax
    ajaxRequest(filename);
}

// Muestra los resultados de la búsqueda
function DisplayResults() {
    // borra la lista antigua
    ul = document.getElementById("list");
    div = document.getElementById("results");
    div.removeChild(ul);

    // crea una lista nueva
    ul = document.createElement("ul");
    ul.id = "list";

    // Versión XML (comentada)
    //names = ajaxreq.responseXML.getElementsByTagName("n");

    // Versión JSON (activa)
    var names = JSON.parse(ajaxreq.responseText);

    for (i = 0; i < names.length; i++) {
        li = document.createElement("li");

        // Versión XML (comentada)
        //name = names[i].firstChild.nodeValue;
        //text = document.createTextNode(name);

        // Versión JSON (activa)
        text = document.createTextNode(names[i]);

        li.appendChild(text);
        ul.appendChild(li);
    }

    if (names.length == 0) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode("No results"));
        ul.appendChild(li);
    }

    // muestra la lista nueva
    div.appendChild(ul);
}

// define el controlador de eventos
obj = document.getElementById("searchlive");
obj.onkeydown = StartSearch;