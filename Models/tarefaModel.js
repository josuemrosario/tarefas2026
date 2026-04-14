class TarefaModel {
   
   // retorna todas as tarefas do banco de dados
    static readAllTArefas(){
        console.log('TarefaModel','readAllTarefas()')
        const dados = [
            {data:'06/04/2026',hora:'12:00',descricao:'almocar salada com hamburguer'},
            {data:'08/04/2026',hora:'14:00',descricao:'Dentista'}
        ]
        return dados

    }    

}

module.exports = TarefaModel