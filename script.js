document.getElementById('loadUserBtn').addEventListener('click', function() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            // Отримуємо дані користувача
            const user = data.results[0];

            // Заповнюємо інформацію на сторінці
            document.getElementById('userPicture').src = user.picture.large;
            document.getElementById('userPhone').textContent = user.phone;
            document.getElementById('userCoordinates').textContent = `Широта: ${user.location.coordinates.latitude}, Довгота: ${user.location.coordinates.longitude}`;
            document.getElementById('userPostcode').textContent = user.location.postcode;
            document.getElementById('userCity').textContent = user.location.city;
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
        });
});