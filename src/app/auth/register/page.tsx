export default function RegisterPage() {
  return (
    <div>
      <h1>Registro</h1>
      <form aria-labelledby="register-form">
  <label htmlFor="username">Nombre de usuario:</label>
  <input type="text" id="username" required aria-label="Nombre de usuario" />

  <label htmlFor="email">Correo electrónico:</label>
  <input type="email" id="email" required aria-label="Correo electrónico" />

  <label htmlFor="password">Contraseña:</label>
  <input type="password" id="password" required aria-label="Contraseña" />

  <button type="submit">Registrarse</button>
</form>
    </div>
  );
}
