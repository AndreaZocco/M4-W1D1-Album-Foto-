document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'zDLkGmt1pSWJmLMxk6ZaDxeRX7MzoxQ22yJYFWnxjMPpRQe9IG1VQWWj';
    const apiUrl = 'https://api.pexels.com/v1/search?query=natura';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.photos);

        const photoAlbum = document.getElementById('photo-album');
        data.photos.forEach(photo => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-lg-4', 'col-md-6', 'mb-4');
            colDiv.innerHTML = `
                <div class="card h-100">
                    <img src="${photo.src.medium}" class="card-img-top" alt="${photo.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${photo.photographer}</h5>
                        <p class="card-text">${photo.alt}</p>
                    </div>
                </div>
            `;
            photoAlbum.appendChild(colDiv);
        });
    })
});

