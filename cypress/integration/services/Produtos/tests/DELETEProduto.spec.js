import * as DELETEProduto from '../requests/DELETEProduto.request';
import * as GETProduto from '../requests/GETProdutos.request';

describe('Delete Produto', () => {
    it('Deletar produto por id', () => {
        GETProduto.todosProdutos().then((resTodosProdutos) => {
            DELETEProduto.deletarProduto(resTodosProdutos.body[0].id).should((resDeletarProduto) => {
                expect(resDeletarProduto.status).to.eq(200)
            })
        })
    })
})