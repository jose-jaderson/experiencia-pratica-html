document.addEventListener('DOMContentLoaded', () => {
  const onlyDigits = s => s.replace(/\D/g,'');
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (cpf) {
    cpf.addEventListener('input', () => {
      let v = onlyDigits(cpf.value).slice(0,11);
      v = v.replace(/^(\d{3})(\d)/, '$1.$2');
      v = v.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      v = v.replace(/\.(\d{3})(\d)/, '.$1-$2');
      cpf.value = v;
    });
  }

  if (telefone) {
    telefone.addEventListener('input', () => {
      let v = onlyDigits(telefone.value).slice(0,11);
      if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4})$/, '($1) $2-$3');
      else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      else v = v.replace(/^(\d*)/, '($1');
      telefone.value = v;
    });
  }

  if (cep) {
    cep.addEventListener('input', () => {
      let v = onlyDigits(cep.value).slice(0,8);
      v = v.replace(/^(\d{5})(\d)/, '$1-$2');
      cep.value = v;
    });
  }
});
