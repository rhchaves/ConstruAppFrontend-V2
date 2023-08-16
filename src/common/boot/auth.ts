export function isAuthenticated() {
  const user = localStorage.getItem('constru_app_user');
  return user; // Retorna true se o usuário estiver autenticado
}
