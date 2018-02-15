var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Mongoose Connect
mongoose.connect('mongodb://localhost/censodm');

//View Engine and Static Folder
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Form Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
    capitulo: "String",
    cidade: "String",
    loja: "String",
    dados:"String",
    endereco: "String",
    email: "String",
    pagina: "String",
    grupo: "String",
    sede: "String",
    relacao: "String",
    participacao: "String",
    regimento: "String",
    obrigatoriedade: "String",
    quantidade: "String",
    idade: "String",
    menos16: "String",
    maconsp: "String",
    avcons: "String",
    ajuda: "String",
    comissao: "String",
    relatorio: "String",
    modelo: "String",
    reunioes: "String",
    tempoinic: "String",
    inics: "String",
    iniciados: "String",
    beneficentes:"String",
    instrucoesinic:"String",
    mat_inst_inic:"String",
    instrucoesdm:"String",
    mat_inst_DM:"String",
    pratrit:"String",
    avrit:"String",
    avinst:"String",
    livros:"String",
    arquivos:"String",
    prestacao:"String",
    mensalidade:"String",
    conhecetavola:"String",
    interessetavola:"String",
    patrocinartavola:"String",
    conventos:"String",
    cavativos:"String",
    cavreq:"String",
    motiv_nao_cav:"String",
    cavincen:"String",
    relacao_conv:"String",
    icc_visit:"String",
    caixa_cap:"String",
    rec_cid:"String",
    evasao:"String",
    motiv_afast:"String",
    atividades:"String",
    temas:"String",
    int_treinamentos:"String",
    area_treinamentos:"String",
    habil_gestao:"String",
    areas_melhorar:"String",
    como_ajudar:"String",

});
var Form = mongoose.model('Form', formSchema);



// Root Route
app.get('/', function(req,res){
    res.render('index');
});

// FORM ROUTE
app.get('/form', function(req,res){
    res.render('form');
});

// FORM POST ROUTE
app.post('/form', function(req,res){
  //Get data from form
  var capitulo = req.body.capitulo;
  var cidade = req.body.cidade;
  var loja = req.body.loja;
  var dados = req.body.dados;
  var endereco = req.body.endereco;
  var email = req.body.email;
  var pagina = req.body.pagina;
  var grupo = req.body.grupo;
  var sede = req.body.sede;
  var relacao = req.body.relacao;
  var participacao = req.body.participacao;
  var regimento = req.body.regimento;
  var obrigatoriedade = req.body.obrigatoriedade;
  var quantidade = req.body.quantidade;
  var idade = req.body.idade;
  var menos16 = req.body.menos16;
  var maconsp = req.body.maconsp;
  var avcons = req.body.avcons;
  var unico = req.body.unico;
  var ajuda = req.body.ajuda;
  var comissao = req.body.comissao;
  var relatorio = req.body.relatorio;
  var modelo = req.body.modelo;
  var reunioes =req.body.reunioes;
  var tempoinic = req.body.tempoinic;
  var inics = req.body.inics;
  var iniciados = req.body.iniciados;
  var beneficentes = req.body.beneficentes;
  var instrucoesinic =req.body.instrucoesinic;
  var mat_inst_inic = req.body.mat_inst_inic;
  var pratrit = req.body.pratrit;
  var avrit = req.body.avrit;
  var avinst = req.body.avinst;
  var livros =req.body.livros;
  var arquivos = req.body.arquivos;
  var prestacao = req.body.prestacao;
  var mensalidade = req.body.mensalidade;
  var conhecetavola = req.body.conhecetavola;
  var interessetavola =req.body.interessetavola;
  var patrocinartavola = req.body.patrocinartavola;
  var conventos = req.body.conventos;
  var cavativos = req.body.cavativos;
  var cavreq = req.body.cavreq;
  var motiv_nao_cav =req.body.motiv_nao_cav;
  var cavincen = req.body.cavincen;
  var relacao_conv = req.body.relacao_conv;
  var evasao = req.body.evasao;
  var motiv_afast = req.body.motiv_afast;
  var atividades =req.body.atividades;
  var tempoinic = req.body.tempoinic;
  var temas = req.body.temas;
  var int_treinamentos = req.body.int_treinamentos;
  var area_treinamentos = req.body.area_treinamentos;
  var habil_gestao = req.body.habil_gestao;
  var areas_melhorar = req.body.areas_melhorar;
  var como_ajudar = req.body.como_ajudar;

  var newForm = {capitulo:capitulo,cidade: cidade, loja: loja,dados:dados,endereco:endereco,email:email,pagina:pagina,grupo:grupo,sede:sede,relacao:relacao,participacao:participacao,regimento:regimento,obrigatoriedade:obrigatoriedade,quantidade:quantidade,
  idade:idade,menos16:menos16,maconsp:maconsp,avcons:avcons,unico:unico,ajuda:ajuda,comissao:comissao,relatorio:relatorio,modelo:modelo,reunioes:reunioes,tempoinic:tempoinic,inics:inics,iniciados:iniciados,beneficentes:beneficentes,instrucoesinic:instrucoesinic,
  mat_inst_inic:mat_inst_inic,pratrit:pratrit,avrit:avrit,avinst:avinst,livros:livros,arquivos:arquivos,prestacao:prestacao,mensalidade:mensalidade,conhecetavola:conhecetavola,interessetavola:interessetavola,patrocinartavola:patrocinartavola,conventos:conventos,
  cavativos:cavativos,cavreq:cavreq,motiv_nao_cav:motiv_nao_cav,cavincen:cavincen,relacao_conv:relacao_conv,evasao:evasao,motiv_afast:motiv_afast,atividades:atividades,tempoinic:tempoinic,temas:temas,int_treinamentos:int_treinamentos,area_treinamentos:area_treinamentos,
  habil_gestao:habil_gestao,areas_melhorar:areas_melhorar,como_ajudar:como_ajudar
  };
  //Saving to DB
  Form.create(newForm, function(err, newlycreated){
    if(err){
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

app.listen(3000,function(){
    console.log('Server Started on Port 3000');
})
