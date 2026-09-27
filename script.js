//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colourIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

function clearAllBlocks() {
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'transparent';
  });
}

function changeColor() {
  const blockId = blockIdInput.value.trim();
  const color = colourIdInput.value.trim();

  // Always clear every block first, so only one is ever "painted"
  // at a time — matches the reset-before-repaint behavior.
  clearAllBlocks();

  if (!blockId || !color) {
    alert('Please enter both a block ID (1-9) and a color.');
    return;
  }

  const targetBlock = document.getElementById(blockId);

  if (!targetBlock || !targetBlock.classList.contains('grid-item')) {
    alert('Block ID must be a number from 1 to 9.');
    return;
  }

  targetBlock.style.backgroundColor = color;
}

function resetGrid() {
  clearAllBlocks();
  blockIdInput.value = '';
  colourIdInput.value = '';
}

changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetGrid);