$('#loading').hide();

$("#boton").click(() => {
    $.get('http://localhost:5000/amigos/', (data) => {
        $('#lista').empty();
        data.forEach(element => {
            var li = document.createElement('li');
            li.innerText = element.name;
            $('#lista').append(li);
        });
    });
});

$("#search").click(() => {
    let inp = $('#input').val();
    $.get('http://localhost:5000/amigos/' + inp, (data) => 
        $('#amigo').text(data.name)
    ).fail(() => $('#amigo').text(`El amigo con id ${inp}no existe`))
});

$("#delete").click(() => {
    let inp2 = $('#inputDelete').val();
    $.ajax({
        url: 'http://localhost:5000/amigos/' + inp2,
        type: 'DELETE',
        data: {"id" : inp2}, //<-----this should be an object.
        success: () => $('#success').text(`Se elimino correctamente el amigo con id ${inp2}`),
    });
});

