fetch ('/produtos')
    .then (res => res.json())
    .then (data => {
        data.forEach(element => {
            document.getElementById("elements").innerHTML += `<td>${element.categoria}</td>`
            document.getElementById("elements").innerHTML += `<td>${element.descricao}</td>`
            document.getElementById("elements").innerHTML += `<td>${element.preco}</td>`
            document.getElementById("elements").innerHTML += `<td>${element.estoque}</td>`
        });
    });