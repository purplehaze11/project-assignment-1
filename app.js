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
		// const lastInd = slicedPerSpaced.length - 1;
		// if (slicedPerSpaced[lastInd] !== /\s/) {
		// 	display.innerText = slicedPerSpaced.splice(lastInd, 0, '-');
		// }
	}

	if (tool === 'percent') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'divide') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'multiply') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'substract') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'add') {
		if (!/\W$/.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'clear') {
		if (sliced[sliced.length - 1] === ' ') {
			sliced.splice(sliced.length, 2);
			display.innerText = sliced.join('');
		}
		sliced.pop();
		display.innerText = sliced.join('');
		if (displayContent.length <= 1) {
			display.innerText = 0;
		}
	}

	if (tool === 'decimal') {
		if (!/\W$/.test(slicedPerSpaced[slicedPerSpaced.length - 1])) {
			const slicedForDecimal = slicedPerSpaced.slice(-1);
			if (
				!slicedForDecimal[0].includes(buttonContent) &&
				slicedForDecimal[0] !== ''
			) {
				slicedForDecimal[0] += buttonContent;
				slicedPerSpaced.splice(-1, 1, slicedForDecimal);
			}
			display.innerText = slicedPerSpaced.join(' ');
		}
	}

	if (tool === 'equal') {
		display.innerText += buttonContent;
	}
});

const calculation = () => {};
