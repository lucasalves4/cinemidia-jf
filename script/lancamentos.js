/*document.addEventListener('DOMContentLoaded', function () {
    var tabela = document.querySelector('.tabela_lacamento');
    var cartazContainer = document.getElementById('cartaz-container');
    var cartazImg = document.getElementById('cartaz-img');
  
    tabela.addEventListener('mouseover', function (event) {
      var target = event.target;
  
      if (target.tagName === 'TD' && target.classList.contains('tabela_lacamento')) {
        var caminhoImagem = target.getAttribute('data-imagem');
        if (caminhoImagem) {
          cartazImg.src = caminhoImagem;
  
          // Posiciona o cartaz ao lado do cursor do mouse
          cartazContainer.style.display = 'block';
          cartazContainer.style.top = event.clientY + 'px';
          cartazContainer.style.left = event.clientX + 20 + 'px';
        }
      }
    });
  
    tabela.addEventListener('mouseout', function (event) {
      cartazContainer.style.display = 'none';
    });
  });*/

  