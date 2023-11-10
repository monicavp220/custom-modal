document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalForm = document.getElementById("myModalForm");
    const openModalButton = document.getElementById("openModalButton");
    const openFormModalButton = document.getElementById("btnCreateProfile");
    const closeModalButton = document.getElementById("closeModalButton");
    const closeModalButtonForm = document.getElementById("closeModalButtonForm");
    const buttonCancel = document.querySelector('#btnCancel');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    openModalButton.addEventListener("click", function () {
        toggleModal(modal, true);
        toggleOpenModalButton(false);
    });

    openFormModalButton.addEventListener("click", function () {
        toggleModal(modal, false);
        toggleModal(modalForm, true);
        toggleOpenModalButton(false);
    });

    closeModalButton.addEventListener("click", function () {
        toggleModal(modal, false);
        toggleOpenModalButton(true);
    });

    closeModalButtonForm.addEventListener("click", function () {
        toggleModal(modalForm, false);
        toggleOpenModalButton(true);
    });

    togglePasswordButtons.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            const inputField = toggle.previousElementSibling;
            inputField.type = inputField.type === 'password' ? 'text' : 'password';
        });
    });

    function toggleModal(element, show) {
        if (show) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }

    function toggleOpenModalButton(show) {
        if (show) {
            openModalButton.style.display = "block";
        } else {
            openModalButton.style.display = "none";
        }
    }


    buttonCancel.addEventListener("click", function () {
        toggleModal(modalForm, false);
        toggleModal(modal, true);
        toggleOpenModalButton(show);
    }
    );


    document.getElementById("editBtn").addEventListener("click", function () {
        document.getElementById("my-modal-children").style.display = "block";
    });

    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("my-modal-children").style.display = "none";
    });

    document.querySelector("#editBtns").addEventListener("click", function () {
        document.getElementById("my-modal-children").style.display = "block";
    }
    );

    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("my-modal-children").style.display = "none";
    });
    const imgCarsEdit = document.getElementById('img-cars-edit');
    const logoItems = document.querySelectorAll('#imag-logo-card .logo-item');
    const closeModal = document.getElementById("closeModal");
    logoItems.forEach(item => {
        item.addEventListener('click', () => {
            const logoImage = item.querySelector('img');
            const logoAlt = logoImage.alt;
            imgCarsEdit.innerHTML = '';
            imgCarsEdit.appendChild(logoImage.cloneNode(true));
            imgCarsEdit.querySelector('img').setAttribute('alt', logoAlt);
            closeModal.click();
        });

    });

    //validar formulario

    const formChildrens = document.getElementById("myFormChildrens");
    const btnCancel = document.getElementById("btnCancel");
    btnCancel.addEventListener("click", function (event) {
        event.preventDefault();
        formChildrens.reset();
    });

    formChildrens.addEventListener("submit", function (event) {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const nameForm = document.getElementById("name-form").value;
        const usuario = document.getElementById("usuario").value;

        let hasError = false;
        if (password !== confirmPassword) {
            hasError = true;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden',
            });
        }
        if (nameForm.trim() === "") {
            hasError = true;
            document.getElementById("error-name").textContent = "Campo obligatorio";
        } else {
            document.getElementById("error-name").textContent = "";
        }

        if (usuario.trim() === "") {
            hasError = true;
            document.getElementById("error-usuario").textContent = "Campo obligatorio";
        } else {
            document.getElementById("error-usuario").textContent = "";
        }

        if (hasError) {
            event.preventDefault();
        }
    });


    const giveBtn = document.getElementById("giveBtn");
    const btnCancelAlert = document.getElementById("btnCancelAlert");
    const containerAlert = document.querySelector(".container-alert");

    giveBtn.addEventListener("click", () => {
        containerAlert.style.display = "block";
    });

    btnCancelAlert.addEventListener("click", () => {
        containerAlert.style.display = "none";
    });



});
