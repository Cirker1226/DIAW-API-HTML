function carregarProdutos() {
    fetch('/produtos')
        .then(res => res.json())
        .then(data => {
            const tabela = document.getElementById("elementos");

            data.forEach(element => {
                tabela.innerHTML += `
                    <tr>
                        <td>${element.categoria}</td>
                        <td>${element.descricao}</td>
                        <td>${element.preco}</td>
                        <td>${element.estoque}</td>
                    </tr>
                `;
            });
        })
}

carregarProdutos();

