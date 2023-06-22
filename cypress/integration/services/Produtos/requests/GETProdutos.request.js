/// <reference types="cypress" />

function todosProdutos() {
    return cy.request({
        method: 'GET',
        url: 'Produto',
        failOnStatusCode: false,
    })
}

function produtoPorId(_idProduto) {
    return cy.request({
        method: 'GET',
        url: `Produto/${_idProduto}`,
        failOnStatusCode: false
    })
}

export {
    todosProdutos,
    produtoPorId,
};