class TarefaModel {
   
   // retorna todas as tarefas do banco de dados
    static readAllTArefas(){
        console.log('TarefaModel','readAllTarefas()')
        dados = [
            {data:'06/04/2026',hora:'12:00',descricao:'almocar salada com hamburguer'}
        ]
        return dados

    }    

}

module.exports = TarefaModel