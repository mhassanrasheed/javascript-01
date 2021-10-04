function makeGrid() {
	let grid = document.getElementById("puzzleholder");
	for (let x = 0; x < puzzleData.settings.height; x++) {
		let myRow = document.createElement("tr");
		myRow.className = "row";
		myRow.id = "row" + x;
		grid.appendChild(myRow);

		let row = document.getElementById("row" + x);
		for (let y = 0; y < puzzleData.settings.width; y++) {
			let idx = document.getElementsByClassName("cell").length;
			let myCell = document.createElement("td");
			a = document.getElementById("row" + x).childElementCount;
			myCell.className = "cell";
			if (puzzleData.settings.celldata[idx] !== " ")
				myCell.className += " given";
			let text = document.createTextNode(puzzleData.settings.celldata[idx]);
			myCell.appendChild(text);
			row.appendChild(myCell);
		}
	}
}

function makeKeyboard() {
	let keyboard = document.getElementById("keys");
	for (let x = 5; x > 0; x--) {
		let key = document.createElement("a");
		key.className = "keys__key";
		key.href = "#";
		let text = document.createTextNode(x);
		key.appendChild(text);

		keyboard.insertBefore(key, keyboard.childNodes[0]);
	}
}

function setTitleAndDifficulty() {
	let titleDiv = document.getElementById("title");
	let h2 = document.createElement("h2");
	let span = document.createElement("span");
	let titleText = document.createTextNode(puzzleData.meta.title);
	let levelText = document.createTextNode(puzzleData.meta.difficulty);
	span.appendChild(levelText);
	h2.appendChild(titleText);
	titleDiv.appendChild(h2);
	titleDiv.appendChild(span);
}

function populate() {
	makeGrid();
	makeKeyboard();
	setTitleAndDifficulty();
}
