/// <reference types="cypress" />

function todosProdutos() {
    return cy.request({
        method: 'GET',
        url: 'Produto',
        failOnStatusCode: false,
    })
}

export {
    todosProdutos,
};