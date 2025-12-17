function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  section.style.opacity = 0;

setTimeout(() => {
    section.innerHTML = resultados;
    section.style.opacity = 1;
}, 150);


  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um jogo de FPS.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  let resultados = "";

  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  section.innerHTML = resultados || "<p>Nada foi encontrado</p>";
}
