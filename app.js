const buttons = document.querySelector('#buttons');
const prevCalc = document.querySelector('#prevCalc');
const curCalc = document.querySelector('#curCalc');

const operator = ['+', '-', '*', '/', '%'];

buttons.addEventListener('click', (e) => {
	const button = e.target;
	const tool = button.dataset.tool;
	const buttonContent = button.innerText;
	const curText = curCalc.innerText;
	const prevText = prevCalc.innerText;
	const lastCurText = curText[curText.length - 1];
	const lastPrevText = prevText[prevText.length - 1];
	const isLastCurText = (element) => element === lastCurText;
	const isLastPrevText = (element) => element === lastPrevText;

	if (tool == 'number') {
		operator.forEach((operator) => {
			if (lastCurText == operator) {
				prevCalc.innerText = curText;
				curCalc.innerText = '';
			}
		});

		if (curText == '') {
			curCalc.innerText = buttonContent;
		} else if (curText == '0') {
			curCalc.innerText += `.${buttonContent}`;
		} else if (curText.length < 15) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'plusMin') {
		if (curText[0] != '-' && curText != '') {
			const minus = '-';
			curCalc.innerText = minus + curText;
		} else if (curText[0] == '-') {
			curCalc.innerText = curText.slice(1);
		}
	}

	if (tool == 'clearAll') {
		curCalc.innerText = '';
		prevCalc.innerText = '';
	}

	if (tool == 'clear') {
		curCalc.innerText = curText.slice(0, -1);
		if (curText.length == 2 && curText[0] == '-') {
			curCalc.innerText = curText.slice(0, -2);
		}
		if (curText == '') {
			curCalc.innerText = prevText.slice(0, -1);
			prevCalc.innerText = '';
		}
	}

	if (tool == 'decimal') {
		if (
			curText != '' &&
			!curText.includes(buttonContent) &&
			!operator.some(isLastCurText)
		) {
			curCalc.innerText += buttonContent;
		}
	}

	if (tool == 'operator') {
		if (
			lastCurText != '.' &&
			curText != '' &&
			!operator.some(isLastCurText) &&
			!operator.some(isLastPrevText)
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
