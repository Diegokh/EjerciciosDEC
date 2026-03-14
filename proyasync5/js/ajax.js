// variables globales para poder seguir la petición
// y la función a la que se llamará al terminar
var ajaxreq=false, ajaxCallback;

// ajaxRequest: Define una petición
function ajaxRequest(filename) {
    try {
        // navegadores modernos
        ajaxreq = new XMLHttpRequest();
    } catch (error) {
        try {
            // IE 5 o IE 6
            ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (error) {
            return false;
        }
    }

    ajaxreq.open("GET", filename);
    ajaxreq.onreadystatechange = ajaxResponse;
    ajaxreq.send(null);
}

// ajaxResponse: Espera una respuesta y llama a una función
function ajaxResponse() {
    if (ajaxreq.readyState != 4) return;
    if (ajaxreq.status == 200) {
        // si la petición ha tenido éxito...
        if (ajaxCallback) ajaxCallback();
    } else alert("Request failed: " + ajaxreq.statusText);
    return true;
}