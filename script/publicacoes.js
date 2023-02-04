
// 1. criar o elemento
// recebe a tag do elemento que queremos criar elemento pai

let article = document.createElement("article") 

 //- apenas para testar

console.log(article) 


// 2. Popular o elemento ( iserir informaçõe no elemento)

// copia e cola as tags(postagem).

article.innerHTML = `
<h3>Postado em 21 de novembro de 2022</h3>
<p>
  "Novas Atualizações na História de "Above the Sea" - Um Jogo de RPG Musical Épico! </p>


  <p> Olá jogadores!</p>
  
  <p> Estamos animados para anunciar as novas atualizações na história de nosso jogo RPG musical "Above the Sea". Desde o lançamento, recebemos inúmeros pedidos dos jogadores sobre a inclusão de novos elementos e personagens na história, e nós finalmente estamos trazendo essas mudanças para vocês!</p>
  
  <p> A história ainda segue quatro personagens de origens diferentes - Miyuki, a sereia; Tatsue, a guitarrista; Kazuo, o gângster; e Akira, o samurai - mas agora eles estão em uma nova jornada juntos para descobrir o verdadeiro significado da música e da vida. Eles enfrentarão novos desafios e superarão obstáculos inesperados, e vocês poderão acompanhá-los a cada passo do caminho.</p>
  
  <p> Além disso, estamos pensando em adicionar dois novos personagens à nossa já diversa equipe de protagonistas. Um é um músico ambulante que vaga pelo país, tocando sua música para qualquer pessoa que o escute. O outro é um artista de rua que usa sua arte para expressar sua paixão pela vida e pela música.Eles poderão se juntar aos nossos personagens principais em sua jornada épica!
    Vamos ouvir as opiniões dos fãs para realizar essas mudanças. 
  </p>
  
  <p> Não é só isso! Estamos também aumentando o nível de interação dos jogadores com a história. Os jogadores agora terão a chance de escolher suas próprias ações e decisões, afetando assim o rumo da história e sua conclusão. Além disso, estamos adicionando novas cenas de ação e combate, para que vocês possam experimentar a verdadeira emoção da jornada.</p>
  
  <p> Nós estamos muito animados com essas novas atualizações e esperamos que vocês também estejam! Fiquem ligados para mais novidades e atualizações em breve. Já estamos trabalhando duro para tornar "Above the Sea" o melhor jogo RPG musical que vocês já jogaram!</p>
  
  <P> Até a próxima!</P>
  <P> Equipe de "Above the Sea"." </P>

<<<<<<< HEAD

=======
>>>>>>> c660bf1b270c2dcc3af24c0558381fcd90a0ffa1
` 
console.log(article) 


let main = document.querySelector("main");

main.appendChild(article)

