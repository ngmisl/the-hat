var divs = document.querySelectorAll(".rugrats");

divs.forEach(function(div) {
    var text = div.textContent;
    div.innerHTML = "";

    for (var i = 0; i < text.length; i++) {
        var span = document.createElement("span");
        span.textContent = text[i];
        div.appendChild(span);
    }

    var spans = div.querySelectorAll('span');

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    spans = shuffle(Array.from(spans));

    function getRandomValue() {
			return Math.random() * 0.4 - 0.24; 			
    }

    function applyRandomTransform() {
        spans.forEach(function(span) {
            var xOffset = getRandomValue() * 10;
            var yOffset = getRandomValue() * 15;
            var rotation = getRandomValue() * 6;

            span.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px) rotate(' + rotation + 'deg)';
            span.style.textIndent = xOffset + 'px';
        });
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var currentIndex = 0;

    function changeColorSequentially() {
        spans.forEach(function(span, index) {
            var colorIndex = (index + currentIndex) % spans.length;
            span.style.color = (colorIndex === 0) ? getRandomColor() : spans[colorIndex - 1].style.color;
        });

        currentIndex = (currentIndex + 1) % spans.length;
    }

    setInterval(changeColorSequentially, 250); 
    setInterval(applyRandomTransform, 100); 
});