import servicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';


describe('Classe de Servico de Pagamentos', () => {
    it('Deve registrar um pagamento com categoria padrão quando o valor é igual ou menor que 100', function() {
        // Arrange
        const servicoDePagamentoEspecializado = new servicoDePagamento()
        
        //Act
        servicoDePagamentoEspecializado.pagar('0987-7656-3475', 'Amazon', 58.00)
        const ultimoPagamento = servicoDePagamentoEspecializado.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Amazon');
        assert.equal(ultimoPagamento.valor, 58.00);
        assert.equal(ultimoPagamento.categoria, 'padrao');
    });

    it('Deve registrar um pagamento com categoria cara quando o valor é maior que 100', function() {
        // Arrange
        const servicoDePagamentoEspecializado = new servicoDePagamento()
        
        //Act
        servicoDePagamentoEspecializado.pagar('0987-7656-3475', 'Amazon', 100.01)
        const ultimoPagamento = servicoDePagamentoEspecializado.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Amazon');
        assert.equal(ultimoPagamento.valor, 100.01);
        assert.equal(ultimoPagamento.categoria, 'cara');
    })
    it('Deve retornar uma mensagem de erro quando não há pagamentos realizados', function() {
        // Arrange
        const servicoDePagamentoEspecializado = new servicoDePagamento()
        
        //Act
        const ultimoPagamento = servicoDePagamentoEspecializado.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento, 'Nenhum pagamento foi realizado ainda');
        
    })
    it('Deve retornar o último pagamento realizado', function() {
        // Arrange
        const servicoDePagamentoEspecializado = new servicoDePagamento()
        
        //Act
        servicoDePagamentoEspecializado.pagar('0987-7656-3475', 'Amazon', 100.01)
        servicoDePagamentoEspecializado.pagar('0975-7688-3541', 'Netflix', 1200.00)
        const ultimoPagamento = servicoDePagamentoEspecializado.consultarUltimoPagamento()

        //Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0975-7688-3541');
        assert.equal(ultimoPagamento.empresa, 'Netflix');
        assert.equal(ultimoPagamento.valor, 1200.00);
        assert.equal(ultimoPagamento.categoria, 'cara');    
        
    })
    
});


 //Arreng


