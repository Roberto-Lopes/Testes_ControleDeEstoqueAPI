/// <reference types="cypress" />

function deletarProduto(_idProduto){
    return cy.request({
        method: 'DELETE',
        url: `Produto/${_idProduto}`,
        failOnStatusCode: false
    })
}

export {
    deletarProduto,
}