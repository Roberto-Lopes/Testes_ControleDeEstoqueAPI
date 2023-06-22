import * as DELETEProduto from '../requests/DELETEProduto.request';
import * as GETProdutos from '../requests/GETProdutos.request';

describe('DELETE Produto', () => {
    it('Deletar produto por id', () => {
        GETProdutos.todosProdutos().then((resTodosProdutos) => {
            DELETEProduto.deletarProduto(resTodosProdutos.body[0].id).should((resDeletarProduto) => {
                expect(resDeletarProduto.status).to.eq(200)
            })
        })
    })
})