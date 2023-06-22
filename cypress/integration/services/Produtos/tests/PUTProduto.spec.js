import * as GETProdutos from '../requests/GETProdutos.request';
import * as PUTProduto from '../requests/PUTProduto.request';
import * as POSTProduto from '../requests/POSTProduto.request';

describe('PUT Produto', () => {
    it('Atualizar produto por id', () => {
        GETProdutos.todosProdutos().then((resTodosProdutos) => {
            PUTProduto.atualizarProduto(resTodosProdutos.body[0].id).then((resAtualizarProduto) => {
                expect(resAtualizarProduto.status).to.eq(200);
                expect(resAtualizarProduto.body).to.not.be.null;
                expect(resAtualizarProduto.body.nome).to.eq('Pastilha de freio - Frasle');
            })
        })
    })

    it('Criar e atualizar um produto', () => {
        POSTProduto.addProduto().then((resAdicionarProduto) => {
            PUTProduto.atualizarProduto(resAdicionarProduto.body.id).then((resAtualizarProduto) => {
                expect(resAtualizarProduto.status).to.eq(200);
                expect(resAtualizarProduto.body).to.not.be.null;
                expect(resAtualizarProduto.body.nome).to.eq('Pastilha de freio - Frasle');
            })
        })
    })
})