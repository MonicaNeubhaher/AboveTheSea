
// 1. criar o elemento
// recebe a tag do elemento que queremos criar elemento pai

let section = document.createElement("section") 

 //- apenas para testar

console.log(section) 


// 2. Popular o elemento ( iserir informaçõe no elemento)

// copia e cola as tags(postagem).

section.innerHTML = `
<h3>Postado em janeiro de 2023</h3>
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
  
  <p> Até a próxima! Equipe de "Above the Sea"." </P>


  <h3> Postado em dezembro de 2023</h3>


<p>"Rumores Sobre Novas Adições ao Jogo RPG Musical "Above the Sea"</p>

<p>Olá fãs de jogos RPG!</p>

<p>Estamos recebendo boatos de que a equipe por trás do popular jogo RPG musical "Above the Sea" está planejando novas adições ao jogo. Desde o lançamento, o jogo tem sido elogiado por sua envolvente história e personagens únicos, e muitos jogadores estão ansiosos para saber o que a equipe tem planejado para o futuro.</p>
<p>Embora não haja nenhuma confirmação oficial sobre as mudanças planejadas, rumores apontam para a inclusão de novos personagens e elementos na história. Alguns dizem que a equipe está planejando adicionar ainda mais interação para os jogadores, permitindo que eles façam escolhas que afetem o rumo da história.</p>

<p>Nós não podemos esperar para ver o que a equipe tem guardado! Fique ligado para mais atualizações e novidades sobre "Above the Sea". Com certeza será uma aventura épica.</p>

<p>Até a próxima!</p>


<h3> Postado em novembro de 2022</h3>


<p>Expectativas para o Jogo RPG Musical "Above the Sea"</p>

<p>Olá amantes de jogos RPG!</p>

<p>Estamos animados para o lançamento do jogo RPG musical "Above the Sea", previsto para breve. Com uma equipe de desenvolvedores talentosos e uma trilha sonora envolvente, esperamos que este jogo se torne um sucesso entre os fãs de jogos RPG.</p>

<p>A história segue quatro personagens de origens diferentes - Miyuki, a sereia; Tatsue, a guitarrista; Kazuo, o gângster; e Akira, o samurai - em sua jornada para descobrir o verdadeiro significado da música e da vida. Com um enredo envolvente e personagens carismáticos, esperamos que este jogo conquiste os jogadores.

<p>Além disso, a trilha sonora composta especialmente para o jogo promete ser uma experiência musical única e envolvente,
com uma combinação de estilos musicais diferentes, esperamos que a trilha sonora se torne uma parte integrante da jornada épica dos personagens.</p>

<P>Nós não vemos a hora de mergulhar na história de "Above the Sea"! Fique ligado para mais atualizações sobre o lançamento do jogo.</p>

<p>Até a próxima!</p>


` 
console.log(section) 


let main = document.querySelector("#publicacoes");

console.log(main)

main.appendChild(section)

