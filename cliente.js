const informacoesClientes = [
    {
        cpf: 39562057828,
        nome: "Darlan"
    }, {
        cpf: 39562057828,
        nome: "Gabriel"
    }

];



const corpoTabela = document.querySelector("[data-conteudo-tabela]");



const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');

    const conteudoLinha = ` 
        <td>${cpf}</td>
        <td>${nome}</td>
    `;

    linha.innerHTML = conteudoLinha;
    return linha;
}

informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});