// Скрипт для подгрузки контента в <main>
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main-content");

    // Пример: подгрузка main.html через fetch
    fetch('content/main.html')
        .then(response => response.text())
        .then(html => {
            main.innerHTML = html;
        })
        .catch(error => {
            main.innerHTML = "<p>Ошибка загрузки контента.</p>";
            console.error(error);
        });
});
