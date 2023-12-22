function formatarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Limita a 11 dígitos
    cpf = cpf.slice(0, 11);

    // Adiciona os pontos e traço a cada 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, function(_, p1, p2, p3, p4) {
      return p4 ? `${p1}.${p2}.${p3}-${p4}` : (p3 ? `${p1}.${p2}.${p3}` : (p2 ? `${p1}.${p2}` : p1));
    });

    // Atualiza o valor do campo
    document.getElementById('cpf').value = cpf;
  }

  function formatarCelular(celular) {
    celular = celular.replace(/\D/g, '');
    celular = celular.slice(0, 11);

    celular = celular.replace(/(\d{2})(\d{5})(\d{0,4})/, function(_, p1, p2, p3) {
      return p3 ? `(${p1}) ${p2}-${p3}` : (p2 ? `(${p1}) ${p2}` : (p1 ? `(${p1}` : ''));
    });

    document.getElementById('celular').value = celular;
  }