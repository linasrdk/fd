const cardBlocks = document.querySelectorAll('.card');

cardBlocks.forEach((block) => {
  const sButton = block.querySelector('.btn');

  sButton.addEventListener('click', () => {
    cardBlocks.forEach((block) => {
      block.classList.remove('active');
      block.querySelector('.btn').classList.remove('active');
    });

    block.classList.add('active');
    sButton.classList.add('active');
  });
});




