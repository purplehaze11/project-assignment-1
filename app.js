const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display');

buttons.addEventListener('click', (e) => {
	const button = e.target;
	const tool = button.dataset.tool;
	const buttonContent = button.innerText;
	const displayContent = display.innerText;
	const sliced = displayContent.split('');
	// const slicedPerSpaced = displayContent.split(' ');
	const calculator = [];
	const operator = /[%*+/]/;

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
		// if (!/\W$/.test(slicedPerSpaced[slicedPerSpaced.length - 1])) {
		// 	const minus = '-'.concat(slicedPerSpaced[slicedPerSpaced.length - 1]);
		// 	slicedPerSpaced.splice(-1, 1, minus);
		// }
		// slicedPerSpaced.join(' ');
	}

	if (tool === 'percent') {
		if (!operator.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'divide') {
		if (!operator.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'multiply') {
		if (!operator.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'substract') {
		if (!operator.test(displayContent)) {
			display.innerText += buttonContent;
		}
	}

	if (tool === 'add') {
		if (!operator.test(displayContent)) {
			display.innerText += buttonContent;
			const forCalc = displayContent.split(buttonContent);
			calculator.push(forCalc);
		}
	}

	if (tool === 'clear') {
		if (/\s$/.test(displayContent)) {
			sliced.splice(-3, 3);
		} else {
			sliced.pop();
		}
		if (displayContent.length <= 1) {
			display.innerText = 0;
		}

		display.innerText = sliced.join('');
	}

	if (tool === 'decimal') {
		const slicedForDecimal = displayContent.split(' ');
		if (!/\W/.test(slicedForDecimal[slicedForDecimal.length - 1])) {
			slicedForDecimal[slicedForDecimal.length - 1] += buttonContent;
		}
		display.innerText = slicedForDecimal.join(' ');
	}

	if (tool === 'equal') {
		let total;
		if (displayContent.includes('+')) {
			const calc = displayContent.split('+');
			total = parseFloat(calc[0]) + parseFloat(calc[1]);
		} else if (displayContent.includes('*')) {
			const calc = displayContent.split('*');
			total = parseFloat(calc[0]) * parseFloat(calc[1]);
		} else if (displayContent.includes('/')) {
			const calc = displayContent.split('/');
			total = parseFloat(calc[0]) / parseFloat(calc[1]);
		} else if (displayContent.includes('%')) {
			const calc = displayContent.split('%');
			total = (parseFloat(calc[1]) / 100) * parseFloat(calc[0]);
		} else if (displayContent.includes('-')) {
			const calc = displayContent.split('-');
			total = parseFloat(calc[0]) - parseFloat(calc[1]);
		}
		display.innerText = total;
	}
});

// buttons.addEventListener('click', (e) => {
// 	const button = e.target;
// 	const tool = button.dataset.tool;
// 	const buttonContent = button.innerText;
// 	const displayContent = display.innerText;
// 	const sliced = displayContent.split('');
// 	const slicedPerSpaced = displayContent.split(' ');

// 	if (!tool) {
// 		if (displayContent == 0) {
// 			display.innerText = buttonContent;
// 		} else {
// 			display.innerText += buttonContent;
// 		}
// 	}

// 	if (tool === 'clearAll') {
// 		display.innerText = 0;
// 	}

// 	if (tool === 'plusMin') {
// 		// if (!/\W$/.test(slicedPerSpaced[slicedPerSpaced.length - 1])) {
// 		// 	const minus = '-'.concat(slicedPerSpaced[slicedPerSpaced.length - 1]);
// 		// 	slicedPerSpaced.splice(-1, 1, minus);
// 		// }
// 		// slicedPerSpaced.join(' ');
// 	}

// 	if (tool === 'percent') {
// 		if (!/\W$/.test(displayContent)) {
// 			display.innerText += buttonContent;
// 		}
// 	}

// 	if (tool === 'divide') {
// 		if (!/\W$/.test(displayContent)) {
// 			display.innerText += buttonContent;
// 		}
// 	}

// 	if (tool === 'multiply') {
// 		if (!/\W$/.test(displayContent)) {
// 			display.innerText += buttonContent;
// 		}
// 	}

// 	if (tool === 'substract') {
// 		if (!/\W$/.test(displayContent)) {
// 			display.innerText += buttonContent;
// 		}
// 	}

// 	if (tool === 'add') {
// 		if (!/\W$/.test(displayContent)) {
// 			display.innerText += buttonContent;
// 		}
// 	}

// if (tool === 'clear') {
// 	if (/\s$/.test(displayContent)) {
// 		sliced.splice(-3, 3);
// 	} else {
// 		sliced.pop();
// 	}
// 	if (displayContent.length <= 1) {
// 		display.innerText = 0;
// 	}/\W$/.test

// 	display.innerText = sliced.join('');
// }

// if (tool === 'decimal') {
// if (!/\W$/.test(slicedPerSpaced[slicedPerSpaced.length - 1])) {
// 	const slicedForDecimal = slicedPerSpaced.slice(-1);
// 	if (
// 		!slicedForDecimal[0].includes(buttonContent) &&
// 		slicedForDecimal[0] !== ''
// 	) {
// 		slicedForDecimal[0] += buttonContent;
// 		slicedPerSpaced.splice(-1, 1, slicedForDecimal);
// 	}
// 	display.innerText = slicedPerSpaced.join(' ');
// }
// }

// 	if (tool === 'equal') {
// 		display.innerText += buttonContent;
// 	}
// });

// if (tool === 'clear') {
// 	sliced.pop();
// 	display.innerText = sliced.join('');
// 	if (displayContent.length <= 1) {
// 		display.innerText = 0;
// 	}
// }

// if (tool === 'equal') {
// 	let total;
// 	if (displayContent.includes('+')) {
// 		const calc = displayContent.split('+');
// 		total = parseFloat(calc[0]) + parseFloat(calc[1]);
// 	} else if (/\d-/g.test(displayContent)) {
// 		// /.\d+-./
// 		const calc = displayContent.split('-');
// 		total = parseFloat(calc[0]) - parseFloat(calc[1]);
// 	} else if (displayContent.includes('*')) {
// 		const calc = displayContent.split('*');
// 		total = parseFloat(calc[0]) * parseFloat(calc[1]);
// 	} else if (displayContent.includes('/')) {
// 		const calc = displayContent.split('/');
// 		total = parseFloat(calc[0]) / parseFloat(calc[1]);
// 	} else if (displayContent.includes('%')) {
// 		const calc = displayContent.split('%');
// 		total = (parseFloat(calc[1]) / 100) * parseFloat(calc[0]);
// 	}
// 	display.innerText = total;
// }
// });
