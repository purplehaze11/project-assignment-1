const buttons = document.querySelector('#buttons');
const prevCalc = document.querySelector('#prevCalc');
const curCalc = document.querySelector('#curCalc');

buttons.addEventListener('click', (e) => {
	const button = e.target;
	const tool = button.dataset.tool;
	const buttonContent = button.innerText;
	const curText = curCalc.innerText;
	const prevText = prevCalc.innerText;
	const lastCurText = curText[curText.length - 1];
	const lastPrevText = prevText[prevText.length - 1];
	const operator = /[+*-/]/g;

	if (!tool) {
		if (curText.includes('+')) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
		if (curText.includes('*')) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
		if (curText.includes('/')) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
		if (curText.includes('%')) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
		if (curText.includes('-')) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
		if (curText == '') {
			curCalc.innerText = buttonContent;
		} else if (curText == '0') {
			curCalc.innerText += `.${buttonContent}`;
		} else {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'decimal') {
		if (curText != '' && !curText.includes(buttonContent) && curText != /\W$/) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'add') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			!curText.includes(buttonContent) &&
			!prevText.includes(buttonContent)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'divide') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			!curText.includes(buttonContent) &&
			!prevText.includes(buttonContent)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'percent') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			!curText.includes(buttonContent) &&
			!prevText.includes(buttonContent)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'multiply') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			!curText.includes(buttonContent) &&
			!prevText.includes(buttonContent)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'substract') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			lastCurText != '-' &&
			lastPrevText != '-'
			// !curText.includes(buttonContent) &&
			// !prevText.includes(buttonContent)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'equal') {
		if (prevText.includes('*') && curText != '' && lastCurText != '.') {
			curCalc.innerText = parseFloat(prevText) * parseFloat(curText);
			prevCalc.innerText = '';
		}
		if (prevText.includes('+') && curText != '' && lastCurText != '.') {
			curCalc.innerText = parseFloat(prevText) + parseFloat(curText);
			prevCalc.innerText = '';
		}
		if (prevText.includes('/') && curText != '' && lastCurText != '.') {
			curCalc.innerText = parseFloat(prevText) / parseFloat(curText);
			prevCalc.innerText = '';
		}
		if (prevText.includes('%') && curText != '' && lastCurText != '.') {
			curCalc.innerText = parseFloat(prevText) * (parseFloat(curText) / 100);
			prevCalc.innerText = '';
		}
		if (lastPrevText == '-' && curText != '' && lastCurText != '.') {
			curCalc.innerText = parseFloat(prevText) - parseFloat(curText);
			prevCalc.innerText = '';
		}
	}
});

// buttons.addEventListener('click', (e) => {
// 	const button = e.target;
// 	const tool = button.dataset.tool;
// 	const buttonContent = button.innerText;
// 	const curText = curCalc.innerText;
// 	const prevText = prevCalc.innerText;
// 	const lastCurText = curText[curText.length - 1];

// 	if (!tool) {
// 		if (curText.includes('+')) {
// 			prevCalc.innerText = curText;
// 			curCalc.innerText = '';
// 		}
// 		if (curText.includes('*')) {
// 			prevCalc.innerText = curText;
// 			curCalc.innerText = '';
// 		}
// 		if (curText == '') {
// 			curCalc.innerText = buttonContent;
// 		} else {
// 			curCalc.innerText += buttonContent;
// 		}
// 	}

// 	if (tool == 'decimal') {
// 		if (curText != '' && !curText.includes(buttonContent)) {
// 			curCalc.innerText += buttonContent;
// 		}
// 	}

// 	if (tool == 'add') {
// 		if (
// 			prevText.includes(buttonContent) &&
// 			curText != '' &&
// 			lastCurText != '.'
// 		) {
// 			curCalc.innerText = parseFloat(prevText) + parseFloat(curText);
// 			prevCalc.innerText = '';
// 		}
// 		if (
// 			lastCurText != '.' &&
// 			curText != '' &&
// 			!curText.includes(buttonContent)
// 		) {
// 			curCalc.innerText += buttonContent;
// 		}
// 	}

// 	if (tool == 'multiply') {
// 		if (
// 			prevText.includes(buttonContent) &&
// 			curText != '' &&
// 			lastCurText != '.'
// 		) {
// 			curCalc.innerText = parseFloat(prevText) * parseFloat(curText);
// 			prevCalc.innerText = '';
// 		}
// 		if (
// 			lastCurText != '.' &&
// 			curText != '' &&
// 			!curText.includes(buttonContent)
// 		) {
// 			curCalc.innerText += buttonContent;
// 		}
// 	}
// });
