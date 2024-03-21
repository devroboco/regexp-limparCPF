const cpfsList = document.querySelectorAll('.cpf li');

function elementsInnerText([...elements]) {
  return elements.map((element) => element.innerText);
}

function limparCPF(cpf) {
  return cpf.replace(/\D/g, '');
}

function construirCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

function formatarCPFS(cpfs) {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

substituiCPFS(cpfsList);
