// VARIÁVEIS//
const pExplicativo = document.getElementById('pExplicativo');
const boxMensagem = document.getElementById('boxMensagem');
const paisTitulo = document.getElementById('paisTitulo');
const paisCuriosidade = document.getElementById('paisCuriosidade');
const paisContagem = document.getElementById('paisContagem');
const btnMensagem = document.getElementById('btnMensagem');
let sortear ;
let nomeSorteado = "";
let descricaoSorteada = "";
let quantidadeSorteada = 0;

//ARRAY BIDIMENSIONAL COM 10 POSIÇÕES:
let nomesPaises = [
    ['Argentina', 'País do Tango! é o lar da cidade mais ao sul do mundo, Ushuaia, conhecida como o Fim do Mundo.', 0],

    ['Bolívia', 'País dos extremos! Dos 0 aos 40 graus, dos 0 aos 4.000 metros de altitude.', 0],

    ['Brasil', 'País do futebol! O jogo simboliza não só a harmonia racial, juventude, inovação e habilidade, mas teve um papel fundamental na construção da identidade nacional brasileira.', 0],

    ['Chile', 'País de contrastes! É o país mais comprido do mundo, com 4.329 quilômetro e também um dos territórios mais estreitos, com uma largura média de 180 quilômetros.', 0],

    ['Colombia', 'País dos ritmos musicais! É conhecido pelos seus ritmos musicais e danças típicas, algo que ficou bem em evidência com as canções do filme Encanto.', 0],

    ['Equador', 'País verde!  foi o primeiro país a incluir em sua Constituição os “Direitos da Natureza”, em 2008.', 0],

    ['Paraguai', 'País de raízes! É o único país da América do Sul a ainda utilizar o Guarani – o dialeto indígena falado pelos índios Guarani – como idioma oficial.', 0],

    ['Peru', 'País da civilização mais antiga da América Latina! E não é só a civilização Inca que é conhecida no Peru. O país também foi berço para diversas civilizações antes mesmo do povo Inca dominar essas terras.', 0],

    ['Uruguai', 'País considerado a Suíça da América Latina! Com políticas inclusivas e programas pioneiros, a capital do Uruguai foi escolhida várias vezes como uma das cidades com maior qualidade de vida da América do Sul.', 0],

    ['Venezuela', 'País do verão! O país tem só tem duas estações climáticas: a estação quente e seca e a estação quente e chuvosa.', 0]
]

// FUNÇÃO PARA APARECER O DISPLAY COM AS MENSAGENS//
btnMensagem.onclick = function (){
    var sortear = parseInt(Math.random()*10)
    boxMensagem.style.display = 'block'
    pExplicativo.innerHTML = 'Clique em sortear para ver o próximo 👇'
    nomeSorteado = nomesPaises[sortear][0]
    descricaoSorteada = nomesPaises[sortear][1]
    nomesPaises[sortear][2] = nomesPaises[sortear][2] + 1;
    paisTitulo.innerHTML = nomeSorteado
    paisCuriosidade.innerHTML = descricaoSorteada
    paisContagem.innerHTML = `O país ${nomeSorteado} já foi sorteado: ${nomesPaises[sortear][2]}x`
}