/// <reference types="cypress" />

const payLoadUpdateProduto = require('../payloads/update-produto.json');

function atualizarProduto(_idProduto) {
    cy.request({
        method: 'PUT',
        url: `Produto/${_idProduto}`,
        failOnStatusCode: false,
        body: payLoadUpdateProduto
    })
}

export {
    atualizarProduto,
}

