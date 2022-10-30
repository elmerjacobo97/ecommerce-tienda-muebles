const modalImagen = document.querySelector('#modal-imagen');

// show.bs.modal > viene en la api de bootstrap
// Cuando se muestra el modal
if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function (evt) {
        const enlace = evt.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');

        // Construir la imagen
        const imagen = document.createElement('img');
        imagen.src = `img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galería';

        // Seleccionar en dónde lo quiero mostrar la imagen
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);

    });

// Cuando se oculta el modal
    modalImagen.addEventListener('hidden.bs.modal', function () {
        const contenidoModal = document.querySelector('.modal-body');
        // contenidoModal.textContent = '';
        while (contenidoModal.firstChild) {
            contenidoModal.removeChild(contenidoModal.firstChild)
        }
    });
}

// Validar formulario
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()