export default class servicoDePagamento {

    #pagamentos

    constructor(){
        this.#pagamentos = []
    }

    pagar(codigoDeBarras, empresa, valor){

        let categoriaDefinida = 'padrao'

        if(valor > 100.00){
            categoriaDefinida = 'cara'
        }

        this.#pagamentos.push({
            codigoDeBarras: codigoDeBarras,
            empresa: empresa, 
            valor: valor,
            categoria: categoriaDefinida
        });
    
    }

    consultarUltimoPagamento(){
        if(this.#pagamentos.length == 0){
            return 'Nenhum pagamento foi realizado ainda'
        }

        return this.#pagamentos.at(-1)
    }

}
