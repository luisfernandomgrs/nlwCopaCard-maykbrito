let isIgnite = true

function changeCard(event) {
  const card = event.currentTarget

  /*
  // 1° forma de realizar a troca de imagens...
  const backgroundImage = isIgnite ? "url(./assets/bg-ignite.svg)" : "url(./assets/bg-explorer.svg)"
  card.style.backgroundImage = backgroundImage
  */

  // 2° forma de realizar a troca de imagens...
  // usando template-literals, fazendo uma interpolação...
  const bg = isIgnite ? "explorer" : "ignite"
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`

  isIgnite = !isIgnite
}