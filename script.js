function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campopesquisa").value;
   
    //se o campo de pesquisa for uma string vazia
    if (campoPesquisa == "")
       {
        section.innerHTML = "<p>Nenhum jogo encontrado.</p>"
        return;
       }

     campoPesquisa = campoPesquisa.toLowerCase();  

    // Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Loop através de cada item em 'dados'
    for (let dado of dados)
   {   
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      //se titulo includes campoPesquisa entao faça...
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
      
        //cria um novo elemento
        
       resultados += 
      ` 
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">
                  ${dado.descricao}.
                  <br>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </p>
          </div>
      `;
        
      if (!resultados)
      {
        section.innerHTML = "<p>Nenhum jogo encontrado.</p>"    
          
      } 


    }
       

    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
} 