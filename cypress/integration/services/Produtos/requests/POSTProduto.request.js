/// <reference types="cypress" />

const payloadAddProduto = require('../payloads/add-produto.json')

function addProduto() {
    return cy.request({
        method: 'POST',
        url: 'Produto',
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}

export {
    addProduto,
}