let isDragging = false;
const progressBarMax = 1000; // Valor máximo do progress bar

function startDragging(event) {
  isDragging = true;
  dragging(event);
}

function stopDragging() {
  isDragging = false;
}

function dragging(event) {
  if (isDragging) {
    const progressBar = document.getElementById("progress-bar");
    const progress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value"); // Elemento h2
    const storageUsed = document.querySelector("#storage h1 span"); // Seleciona o elemento <span> dentro do <h1>

    // Obtem a posição do mouse em relação à barra de progresso
    const clickX = event.clientX - progressBar.offsetLeft;
    const progressBarWidth = progressBar.clientWidth;
    const percentage = (clickX / progressBarWidth) * 100;

    // Calcula o valor entre 0 e progressBarMax com base na porcentagem
    const value = (percentage / 100) * progressBarMax;

    // Calcula o valor restante para atingir 1000
    const remainingValue = progressBarMax - value;

    // Limita o valor restante entre 0 e progressBarMax
    const limitedRemainingValue = Math.min(
      Math.max(remainingValue, 0),
      progressBarMax
    );

    // Atualiza o estilo da barra de progresso
    progress.style.width = (value / progressBarMax) * 100 + "%";

    // Atualiza o texto do h2 com o valor correspondente entre 0 e progressBarMax
    progressValue.innerText = Math.round(limitedRemainingValue);

    // Atualiza o texto do <span> com o valor de espaço utilizado em GB
    const spaceUsedGB = (value / progressBarMax) * 1000;
    storageUsed.innerText = Math.round(spaceUsedGB) + " GB";
  }
}
