const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display');
const displayContent = display.innerText;

buttons.addEventListener('click', (e) => {
	const button = e.target;
	const tool = button.dataset.tool;
	const buttonContent = button.innerText;
	const displayContent = display.innerText;
	const sliced = displayContent.split('');
	const slicedPerSpaced = displayContent.split(' ');

	if (!tool) {
		if (displayContent == 0) {
			display.innerText = buttonContent;
		} else {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'clearAll') {
		display.innerText = 0;
	}

	if (tool === 'plusMin') {
		sliced.unshift('-');
		sliced.join('');
	}

	if (tool === 'percent') {
		display.innerText += buttonContent;
	}

	if (tool === 'divide') {
		display.innerText += buttonContent;
	}

	if (tool === 'multiply') {
		display.innerText += buttonContent;
	}

	if (tool === 'substract') {
		display.innerText += buttonContent;
	}

	if (tool === 'add') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'clear') {
		sliced.pop();
		display.innerText = sliced.join('');
		if (displayContent.length <= 1) {
			display.innerText = 0;
		}
	}

	if (tool === 'decimal') {
		if (!displayContent.includes(buttonContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'equal') {
		display.innerText += buttonContent;
	}
});

const calculation = () => {};
