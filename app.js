const buttons = document.querySelector('#buttons');
const prevCalc = document.querySelector('#prevCalc');
const curCalc = document.querySelector('#curCalc');

const operator = ['+', '-', '*', '/', '%'];

const calculate = (prevText, curText, lastCurText) => {
	if (prevText.includes('*') && curText != '' && lastCurText != '.') {
		curCalc.innerText = parseFloat(
			(parseFloat(prevText) * parseFloat(curText)).toFixed(10)
		);
		prevCalc.innerText = '';
	}
	if (prevText.includes('+') && curText != '' && lastCurText != '.') {
		curCalc.innerText = parseFloat(
			(parseFloat(prevText) + parseFloat(curText)).toFixed(10)
		);
		prevCalc.innerText = '';
	}
	if (prevText.includes('/') && curText != '' && lastCurText != '.') {
		curCalc.innerText = parseFloat(
			(parseFloat(prevText) / parseFloat(curText)).toFixed(10)
		);
		prevCalc.innerText = '';
	}
	if (prevText.includes('%') && curText != '' && lastCurText != '.') {
		curCalc.innerText = parseFloat(
			(parseFloat(prevText) * (parseFloat(curText) / 100)).toFixed(10)
		);
		prevCalc.innerText = '';
	}
	if (
		prevText[prevText.length - 1] == '-' &&
		curText != '' &&
		lastCurText != '.'
	) {
		curCalc.innerText = parseFloat(
			(parseFloat(prevText) - parseFloat(curText)).toFixed(10)
		);
		prevCalc.innerText = '';
	}
};

const addNumber = (lastCurText, curText, operand) => {
	operator.forEach((operator) => {
		if (lastCurText == operator) {
			prevCalc.innerText = curText;
			curCalc.innerText = '';
		}
	});

	if (curText == '') {
		curCalc.innerText = operand;
	} else if (curText == '0') {
		curCalc.innerText += `.${operand}`;
	} else if (curText.length < 15) {
		curCalc.innerText += operand;
	}
};

const clear = (curText, prevText) => {
	curCalc.innerText = curText.slice(0, -1);
	if (curText.length == 2 && curText[0] == '-') {
		curCalc.innerText = curText.slice(0, -2);
	}
	if (curText == '') {
		curCalc.innerText = prevText.slice(0, -1);
		prevCalc.innerText = '';
	}
};

const clearAll = () => {
	curCalc.innerText = '';
	prevCalc.innerText = '';
};

const decimal = (curText, isLastCurText) => {
	if (
		curText != '' &&
		!curText.includes('.') &&
		!operator.some(isLastCurText)
	) {
		curCalc.innerText += '.';
	}
};

const operation = (
	lastCurText,
	curText,
	isLastCurText,
	isLastPrevText,
	operand
) => {
	if (
		lastCurText != '.' &&
		curText != '' &&
		!operator.some(isLastCurText) &&
		!operator.some(isLastPrevText)
	) {
		curCalc.innerText += operand;
	}
};

const plusMin = (curText) => {
	if (curText[0] != '-' && curText != '') {
		const minus = '-';
		curCalc.innerText = minus + curText;
	} else if (curText[0] == '-') {
		curCalc.innerText = curText.slice(1);
	}
};

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
		addNumber(lastCurText, curText, buttonContent);
	}

	if (tool == 'plusMin') {
		plusMin(curText);
	}

	if (tool == 'clearAll') {
		clearAll();
	}

	if (tool == 'clear') {
		clear(curText, prevText);
	}

	if (tool == 'decimal') {
		decimal(curText, isLastCurText);
	}

	if (tool == 'operator') {
		operation(
			lastCurText,
			curText,
			isLastCurText,
			isLastPrevText,
			buttonContent
		);
	}

	if (tool == 'equal') {
		calculate(prevText, curText, prevCalc, curCalc, lastCurText);
	}
});

document.addEventListener('keydown', (e) => {
	const curText = curCalc.innerText;
	const prevText = prevCalc.innerText;
	const lastCurText = curText[curText.length - 1];
	const lastPrevText = prevText[prevText.length - 1];
	const isLastCurText = (element) => element === lastCurText;
	const isLastPrevText = (element) => element === lastPrevText;

	if (e.key == 'Backspace') {
		clear(curText, prevText);
	}

	if (e.key == 'Delete') {
		clearAll();
	}

	if (e.key == '.') {
		decimal(curText, isLastCurText);
	}

	if (e.key.match(/[+\-*\/%]/g)) {
		operation(lastCurText, curText, isLastCurText, isLastPrevText, e.key);
	}

	if (e.key.match(/[0-9]/g)) {
		addNumber(lastCurText, curText, e.key);
	}

	if (e.key == '_') {
		plusMin(curText);
	}

	if (e.key == '=') {
		calculate(prevText, curText, prevCalc, curCalc, lastCurText);
	}
});
