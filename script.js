function pesquisar() {
  let section = document.getElementById("resultados-pesquisa")

  let campoPesquisa = document.getElementById('barra-pesquisa').value.toLowerCase()

  if (!campoPesquisa) {
      section.style.display = "none"
      return
  }

  section.style.display = "block"
  let resultado = ""
  for (let t of games) {
      if (t.titulo.toLowerCase().includes(campoPesquisa) || (t.tags.toLowerCase().includes(campoPesquisa))) {
          resultado += `
          <div class="item-resultado">
                  <h2>${t.titulo}</h2>
                  <p class="descricao-personagem">${t.descricao}</p>
                  <a href="${t.link}" target="_blank">Informações adicionais</a>
          </div>
      `
      }
  }
  if (!resultado) {
      resultado = "<h2>Nenhum resultado encontrado.</h2>"
  }
  section.innerHTML = resultado
}
