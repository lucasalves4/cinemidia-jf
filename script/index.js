function toggleInfo(elementId, buttonId) {
  var element = document.getElementById(elementId);
  var button = document.getElementById(buttonId);

  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
    button.innerHTML = 'Ocultar Informações';
  } else {
    element.style.display = 'none';
    button.innerHTML = 'Mais Informações';
  }
}

function searchMovies() {
  // Obtenha o valor inserido no campo de busca
  var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  // Obtenha todas as linhas (filmes) da tabela
  var rows = document.querySelectorAll('#centro table tr');
  var noResultsMessage = "Filme não encontrado!";

  // Variável para rastrear se pelo menos um filme foi encontrado
  var foundMovies = false;

  // Itere sobre as linhas e mostre ou oculte conforme a pesquisa
  for (var i = 0; i < rows.length; i++) {
    var movieTitle = rows[i].querySelector('dt span').textContent.trim().toLowerCase();

    // Verifique se o título do filme contém a string de pesquisa
    if (movieTitle.includes(searchTerm)) {
      rows[i].style.display = 'table-row';  // Exiba a linha
      foundMovies = true;
    } else {
      rows[i].style.display = 'none';  // Oculte a linha
    }
  }

  // Mostre ou oculte a mensagem "Filme não encontrado!"
  if (!foundMovies) {
    alert(noResultsMessage);
  }
}

// Função para mostrar todos os filmes
function showAllMovies() {
  var rows = document.querySelectorAll('#centro table tr');
  for (var i = 1; i < rows.length; i++) {
    rows[i].style.display = 'table-row';
  }
}