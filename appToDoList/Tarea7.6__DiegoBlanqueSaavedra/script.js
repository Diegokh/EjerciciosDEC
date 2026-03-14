$(function () {
  $('input').val('');
  $('input').first().focus();

  function obtenerTareas() {
    let tareas = [];
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      if (clave.startsWith("tarea_")) {
        let tarea = JSON.parse(localStorage.getItem(clave));
        tarea.id = clave; 
        tareas.push(tarea);
      }
    }
    return tareas;
  }

  //Muestro las tareas
  function mostrarTareas() {
    let tareas = obtenerTareas();
    let tabla = $('#tabl-acc tbody');
    tabla.empty();
  
    for (let indice in tareas) {
      let tarea = tareas[indice];
  
      tabla.append(`
        <tr>
          <td>${tarea.titulo}</td>
          <td>${tarea.descripcion}</td>
          <td>
            <button class="btn btn-warning btn-sm btn-editar" data-id="${tarea.id}">Editar</button>
            <button class="btn btn-danger btn-sm btn-eliminar" data-id="${tarea.id}">Eliminar</button>
          </td>
        </tr>
      `);
    }
  }
  
//Guardo las tareas con localstorage
  function guardarTarea() {
    let titulo = $('#titulo-cr').val().trim();
    let descripcion = $('#desc-cr').val().trim();

    $('#alertDiv, #alertDivDesc, #envioGuardado').html('');

    if (titulo === '' && descripcion === '') {
      $('#alertDiv').html('<p>Los campos no pueden estar vacíos</p>');
      $('#titulo-cr').focus();
    } else if (titulo === '') {
      $('#alertDiv').html('<p>El título no puede estar vacío</p>');
      $('#titulo-cr').focus();
    } else if (descripcion === '') {
      $('#alertDivDesc').html('<p>La descripción no puede estar vacía</p>');
      $('#desc-cr').focus();
    } else {
      let contador = localStorage.getItem("tarea_contador") || 0;
      contador++;
      localStorage.setItem("tarea_contador", contador);

      let tareaId = `tarea_${contador}`;
      let tarea = { titulo, descripcion };
      localStorage.setItem(tareaId, JSON.stringify(tarea));

      $('#envioGuardado').html('<p class="text-success">Tarea guardada correctamente</p>');
      $('#titulo-cr, #desc-cr').val('');
      $('#titulo-cr').focus();
      mostrarTareas();
    }
  }

  //Actualizo las tareas
  function actualizarTarea() {
    let titulo = $('#titulo-ac').val().trim();
    let descripcion = $('#desc-ac').val().trim();
    let tareaId = $('#btn-ac').data('id'); 

    $('#alertDivTitAct, #alertDivDescAct, #tareaAct').html('');

    if (titulo === '' && descripcion === '') {
      $('#alertDivTitAct').html('<p>Los campos no pueden estar vacíos</p>');
      $('#titulo-ac').focus();
    } else if (titulo === '') {
      $('#alertDivTitAct').html('<p>El título no puede estar vacío</p>');
      $('#titulo-ac').focus();
    } else if (descripcion === '') {
      $('#alertDivDescAct').html('<p>La descripción no puede estar vacía</p>');
      $('#desc-ac').focus();
    } else {
      let tarea = { titulo, descripcion };
      localStorage.setItem(tareaId, JSON.stringify(tarea));

      $('#tareaAct').html('<p class="text-success">Tarea actualizada </p>');
      $('#titulo-ac, #desc-ac').val('');
      $('#btn-ac').removeData('id'); 
      mostrarTareas();
    }
  }


  //Elimino la tarea por su ID
  function eliminarTarea(tareaId) {
    let tarea = JSON.parse(localStorage.getItem(tareaId));
    let confirmacion = confirm(`¿Quieres borrar la tarea?`);

    if (confirmacion) {
      localStorage.removeItem(tareaId);
      mostrarTareas();
    }
  }

  $('#btn-guardar').click(guardarTarea);
  $('#btn-ac').click(actualizarTarea);

  //Evento para el boton eliminar, que llama a la funcion de liminar tarea
  $(document).on('click', '.btn-eliminar', function () {
    let tareaId = $(this).data('id');
    eliminarTarea(tareaId);
  });


  //Cargara los datos de una tarea en los campos de actualizar tarea
  $(document).on('click', '.btn-editar', function () {
    let tareaId = $(this).data('id');
    let tarea = JSON.parse(localStorage.getItem(tareaId));

    $('#titulo-ac').val(tarea.titulo);
    $('#desc-ac').val(tarea.descripcion);
    $('#btn-ac').data('id', tareaId);
  });


  //Moverse por los input pulsando enter
  $('input').on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let inputs = $('input');
      let index = inputs.index(this);

      if (index < inputs.length - 1) {
        inputs.eq(index + 1).focus();
      } else {
        if ($(this).attr('id') === 'desc-cr') {
          guardarTarea();
        } else if ($(this).attr('id') === 'desc-ac') {
          actualizarTarea();
        }
      }
    }
  });

  mostrarTareas();
});
