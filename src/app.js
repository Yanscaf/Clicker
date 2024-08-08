const $circle = document.querySelector('#circle');
const $score = document.querySelector('#score');

$circle.addEventListener('click', (event) => {
	const rect = $circle.getBoundingClientRect();

	const offsetX = event.clientX - rect.left - rect.width / 2;
	const offsetY = event.clientY - rect.top - rect.height / 2;

	const DEG = 100;

	const tiltX = (offsetY / rect.height) * DEG;
	const tiltY = (offsetX / rect.width) * -DEG;

	$circle.style.setProperty('--tiltX', `${tiltX}deg`);
	$circle.style.setProperty('--tiltY', `${tiltY}deg`);

	setTimeout(() => {
		$circle.style.setProperty('--tiltX', `0deg`);
		$circle.style.setProperty('--tiltY', `0deg`);
	}, 300);
});