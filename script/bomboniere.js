document.addEventListener('DOMContentLoaded', function () {
    const btnTamanhos = document.querySelectorAll('.btn-tamanho');
    const itensSelecionados = document.getElementById('itens-selecionados');
    const totalSpan = document.getElementById('total');
    const limparBtn = document.getElementById('limpar-btn');
    let total = 0;

    btnTamanhos.forEach(btn => {
        btn.addEventListener('click', function () {
            const item = this.dataset.item;
            const tamanho = this.dataset.tamanho;
            const precoElement = tamanho === 'unico' ? this.parentNode.nextElementSibling : this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;

            const preco = parseFloat(precoElement.textContent);

            const selecionado = document.querySelector(`[data-item="${item}"][data-tamanho="${tamanho}"]`);
            const li = document.createElement('li');
            li.textContent = `${item} - ${tamanho}: R$ ${preco.toFixed(2)}`;
            itensSelecionados.appendChild(li);

            total += preco;
            totalSpan.textContent = total.toFixed(2);
        });
    });

    limparBtn.addEventListener('click', function () {
        // Limpar itens e zerar total
        itensSelecionados.innerHTML = '';
        total = 0;
        totalSpan.textContent = total.toFixed(2);
    });
});