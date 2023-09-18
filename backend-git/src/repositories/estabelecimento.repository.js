const {Estabelecimento, Localizacao, Contato, horario_atendimento} = require('../database/models')

const create = async function(estabelecimento){
    const estabelecimentoCriado = await Estabelecimento.create(estabelecimento);
    return estabelecimentoCriado;
}

const update = async function(estabelecimento, id){
    await Estabelecimento.update(estabelecimento, {
        where: {id: id}
    });
}

const findAll = async function(){
    const estabelecimentos = await Estabelecimento.findAll();
    return estabelecimentos;
}

const findById = async function(id){
    const estabelecimento = await Estabelecimento.findByPk(id);
    return estabelecimento;
}

const findOneByWhere = async function(where){
    const estabelecimento = await Estabelecimento.findOne({
        where: where
    });
    return estabelecimento;
}

const findByWhereComTudo = async function(where){
    const estabelecimento = await Estabelecimento.findOne({
        include: {model: Localizacao},
        where: where
    });
    return estabelecimento;
}

const deletar = async function(id){
    return await Estabelecimento.destroy({where: {id:id}});
}

module.exports = {
    create,
    update,
    findAll,
    findById,
    findOneByWhere,
    findByWhereComTudo,
    deletar
}