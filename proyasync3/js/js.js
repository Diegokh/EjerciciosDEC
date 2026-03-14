$(function () {
    const form = $('#form')
    const user = $('#user')
    const pass = $('#pass')
    const respuesta = $("#respuesta")
    const fallo = $("#fallo")


    $('#login').submit(function (e) {

        e.preventDefault()

        respuesta.html('')
        fallo.html('')
        const usuario = user.val().trim()
        const password = pass.val().trim()

        if (usuario === '') {
            fallo.html('Introduce el usuario')
            user.focus()
            return
        }

        if (password === '') {
            fallo.html('Introduce la contraseña')
            pass.focus()
            return
        }

        $.ajax({
            url: 'login.php',
            method: 'POST',
            data: {
                user: usuario,
                pass: password
            },
            success: function (data) {

                if (data === 'pass') {
                    respuesta.html(`<p>Bienvenido ${usuario}</p>`)
                    pass.val('')
                } else if (data === 'fail') {
                    fallo.html('<p>Datos incorrectos</p>')
                    pass.val('')
                    pass.focus()
                }
            },
            error: function (xhr, status, error) {
                fallo.html(`<p>Error al conectar con el servidor: ${error}</p>`)
            }

        })


    })





})