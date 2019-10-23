function onClick(handler) {
  $('.deck').on('click', 'li', handler);
}

function onRestart(init) {
  $('.restart').click(init);
}

export { onClick, onRestart };
