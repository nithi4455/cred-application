document.getElementById('getFactBtn').addEventListener('click', getCatFact);

function getCatFact() {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('factText').innerText = data.text;
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(images => {
            document.getElementById('catImage').src = images[0].url;
        })
        .catch(error => {
            console.log('Error fetching cat image:', error);
            document.getElementById('catImage').src = 'placeholder.jpg'; // Placeholder image
        });
    })
    .catch(error => {
        console.log('Error fetching cat fact:', error);
        document.getElementById('factText').innerText = 'Failed to fetch cat fact. Please try again later.';
    });
}

