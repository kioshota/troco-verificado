const button = document.querySelector("button")
const inputPreco = document.getElementById("preco")
const inputQuantidade = document.getElementById("quantidade")
const inputDinheiro = document.getElementById("dinheiro")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularTroco)

function calcularTroco() {
  const preco = inputPreco.valueAsNumber
  const quantidade = inputQuantidade.valueAsNumber
  const dinheiro = inputDinheiro.valueAsNumber

  if (inputPreco.value === "" || inputQuantidade.value === "" || inputDinheiro.value === "") {
    alert("Digite um valor válido.")
    return
  }

  const total = preco * quantidade

  if (dinheiro >= total) {
    const troco = (dinheiro - total).toFixed(2)
    paragrafoResultado.textContent = `TROCO = ${troco}`
  } else {
    const faltam = (total - dinheiro).toFixed(2)
    paragrafoResultado.textContent = `DINHEIRO INSUFICIENTE. FALTAM ${faltam} REAIS`
  }
}
