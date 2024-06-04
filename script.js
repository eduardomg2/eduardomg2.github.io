document.addEventListener('DOMContentLoaded', () => {
    const aficionadosForm = document.getElementById('aficionados-form');
    const aficionadosList = document.getElementById('aficionados-list');

    if (aficionadosForm && aficionadosList) {
        aficionadosForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            if (nombre && email) {
                const li = document.createElement('li');
                li.textContent = `${nombre} (${email})`;
                aficionadosList.appendChild(li);

                // Limpiar el formulario
                aficionadosForm.reset();
            }
        });
    }
});
