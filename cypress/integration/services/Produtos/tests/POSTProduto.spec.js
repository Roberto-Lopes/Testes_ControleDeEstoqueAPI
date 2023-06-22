import * as POSTProduto from '../requests/POSTProduto.request'

describe('Post Produto', () => {
    it('Adicionar novo produto', () => {
        POSTProduto.addProduto().should((response) => {
            expect(response.status).to.eq(200)
        })
    })
})