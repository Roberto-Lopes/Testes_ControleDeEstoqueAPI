import * as GETProdutos from '../requests/GETProdutos.request';

describe('GET Produtos', () => {
    it('Listar todos os produtos', () => {
        GETProdutos.todosProdutos().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null;
        })
    });
});