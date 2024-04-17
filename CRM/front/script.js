document.addEventListener("DOMContentLoaded", function () {
    const USUARIOS_API_URL = "https://jsonplaceholder.typicode.com/users"; // Cambiar esta URL por la de tu API de usuarios
    const NEGOCIOS_API_URL = "https://jsonplaceholder.typicode.com/posts"; // Cambiar esta URL por la de tu API de negocios

    // Función para obtener los datos de los usuarios
    function obtenerUsuarios() {
        axios.get(USUARIOS_API_URL)
            .then(response => {
                mostrarUsuarios(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos de los usuarios:', error);
            });
    }

    // Función para mostrar los usuarios en la tabla
    function mostrarUsuarios(usuarios) {
        const tbody = document.getElementById("usuarios-list");
        tbody.innerHTML = ""; // Limpiar la tabla antes de añadir los datos

        usuarios.forEach(usuario => {
            const row = `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.username}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.website}</td>
                    <td>${usuario.address.city}</td>
                    <td>${usuario.phone}</td>
                    <td>${usuario.company.name}</td>
                    <td>${usuario.address.street}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Función para obtener los datos de los negocios
    function obtenerNegocios() {
        axios.get(NEGOCIOS_API_URL)
            .then(response => {
                mostrarNegocios(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos de los negocios:', error);
            });
    }

    // Función para mostrar los negocios en la tabla
    function mostrarNegocios(negocios) {
        const tbody = document.getElementById("negocios-list");
        tbody.innerHTML = ""; // Limpiar la tabla antes de añadir los datos

        negocios.forEach(negocio => {
            const row = `
                <tr>
                    <td>${negocio.id}</td>
                    <td>${negocio.title}</td>
                    <td>${negocio.body}</td>
                    <td>${negocio.userId}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Cargar los datos de los usuarios y negocios al cargar la página
    obtenerUsuarios();
    obtenerNegocios();
});