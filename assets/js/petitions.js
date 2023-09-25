const username = 'josepalaci0' // Reemplaza con tu nombre de usuario de GitHub
const apiUrl = `https://api.github.com/users/${username}`

async function obtenerInformacionUsuario() {
    try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(
                `Error al obtener información del usuario: ${response.statusText}`
            )
        }

        const data = await response.json()

        document.getElementById('avatar').src = data.avatar_url
        document.getElementById('username').textContent = data.login
        document.getElementById('location').textContent = `Ubicación: ${
            data.location || 'No disponible'
        }`
        document.getElementById('profile-link').href = data.html_url
        document.getElementById('bio').textContent = data.bio
    } catch (error) {
        console.error('Error:', error)
    }
}

// Llamar a la función para obtener información del usuario al cargar la página
obtenerInformacionUsuario()
