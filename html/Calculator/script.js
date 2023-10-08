let result = document.getElementById('result');

function addToResult(value) {
    const audio = new Audio("0003101.mp3");
    audio.volume = 0.1;
    audio.play();
    result.value += value;
}

function clearResult() {
    result.value = '';
    const audio = new Audio("clear.mp3");
    audio.volume = 0.1;
    audio.play();
}

function calculateResult() {
    const audio = new Audio("0003101.mp3");
    audio.volume = 0.1;
    audio.play();
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
