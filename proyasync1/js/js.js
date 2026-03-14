$('#btnCargar').on('click', function () {
    $('#loader').css('display', 'flex')
    $('#lista').empty()

    $.ajax({
        url: 'pelis.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#loader').hide();

            let html = '<table>'
            html += '<thead><tr>'
            html += '<th>#</th>'
            html += '<th>Titulo</th>'
            html += '<th>Genero</th>'
            html += '</tr></thead>'
            html += '<tbody>'


            for (let i = 0; i < data.length; i++) {

                html += '<tr>'
                html += '<td>' + (i + 1) + '</td>'
                html += '<td>' + data[i].titulo + '</td>'
                html += '<td><span>' + data[i].genero + '</span></td>'
                html += '</tr>'
            }

            html += '</tbody></table>'

            $('#lista').html(html)

        },

        error: function (xhr, status, error) {
            $('#loader').hide();
            console.error('Error al cargar Pelis.json: ', error)
            $('#resultado').html(
                '<div>No se pudo cargar el fichero JSON. </div>'
            );
        },

        complete: function(){
            $('#btnCargar').prop('disabled',false).css('opacity',1)
        }
    })



})








