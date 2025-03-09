export default function LoginForm() {
  return (
    <form aria-labelledby="login-form" className="space-y-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico:</label>
      <input type="email" id="email" required aria-label="Correo electrónico" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
      <input type="password" id="password" required aria-label="Contraseña" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />

      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Iniciar sesión</button>
    </form>
  );
}
