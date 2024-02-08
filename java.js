onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function() {
    var notificationContainer = document.getElementById('notification-container');

    // Mostrar la notificación
    notificationContainer.classList.add('show-notification');

    // Desaparecer la notificación después de 15 segundos
    setTimeout(function() {
        notificationContainer.classList.remove('show-notification');
        notificationContainer.classList.add('hide-notification');
    }, 15000); // 15 segundos
});