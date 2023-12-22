function mostrarInfo(elementId, buttonId) {
  var element = document.getElementById(elementId);
  var button = document.getElementById(buttonId);

  //Deixa padrão em display "none" e botão "Mais informações". Quando clica no botão, altera display pra "block" e botão "Ocultar Informações"
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
    button.innerHTML = 'Ocultar Informações';
  } else {
    element.style.display = 'none';
    button.innerHTML = 'Mais Informações';
  }
}

function procurarFilmes() {
  // Pegar valor inserido no input de busca e guarda na variável
  var termoBuscado = document.getElementById('searchInput').value.trim().toLowerCase();

  // Pegar todas as linhas da tabela
  var linhas = document.querySelectorAll('#centro table tr');
  var mensagemErro = "Filme não encontrado!";

  // Variável para rastrear se pelo menos um filme foi encontrado
  var filmeEncontrado = false;

  // Varrer linhas de título e mostrar ou ocultar conforme palavra pesquisada
  for (var i = 0; i < linhas.length; i++) {
    var tituloFilme = linhas[i].querySelector('dt span').textContent.trim().toLowerCase();

    // Verificar se o título do filme contém a string de pesquisa
    if (tituloFilme.includes(termoBuscado)) {
      linhas[i].style.display = 'table-row';
      filmeEncontrado = true;
    } else {
      linhas[i].style.display = 'none'; 
    }
  }
  
  if (!filmeEncontrado) {
    alert(mensagemErro);
  }
}

// Função para mostrar todos os filmes
function mostrarTodosFilmes() {
  var linhas = document.querySelectorAll('#centro table tr');
  for (var i = 1; i < linhas.length; i++) {
    linhas[i].style.display = 'table-row';
  }
}