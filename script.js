const cpfs = document.querySelectorAll('.cpf li');

function elementsInnerText([...elements]) {
  return elements.map((element) => element.innerText);
}

function limparCPF(cpf) {
  return cpf.replace(/\D/g, '');
}
