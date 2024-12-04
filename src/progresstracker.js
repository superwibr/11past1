const currentName = document.currentScript.getAttribute("name");

const rectifyMoment = currentPoint => {
	if (localStorage.checkpoint === undefined) localStorage.movingTo = currentPoint;

	if (currentPoint == localStorage.movingTo) {
		console.log(`moved to "${localStorage.movingTo}" from "${localStorage.checkpoint}"`);
		localStorage.checkpoint = currentPoint;
		delete localStorage.movingTo;
	}

	if (localStorage.resuming) {
		delete localStorage.resuming;
		return;
	}

	if (currentPoint == localStorage.checkpoint) return;

	if (localStorage.checkpoint === undefined) return;

	localStorage.resuming = true;
	location.replace("./login.html");
};

if (currentName) rectifyMoment(currentName);

const checkpoint = localStorage.checkpoint;
const movingTo = localStorage.movingTo;
const resuming = localStorage.resuming;

console.log({ checkpoint, movingTo, resuming, currentName });