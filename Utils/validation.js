function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica si el email cumple con el formato
  if (!regex.test(email)) {
    console.error("❌ Email inválido:", email);
    return false;
  }

  console.log("✅ Email válido:", email);
  return true;
}

// Ejemplo de uso
validarEmail("usuario@correo.com");   // ✅ válido
validarEmail("usuario@correo");       // ❌ inválido
validarEmail("usuario@@correo.com");  // ❌ inválido
validarEmail("usuario correo.com");   // ❌ inválido
