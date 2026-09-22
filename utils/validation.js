export function isValidKonguEmail(email) {
  const value = email.trim().toLowerCase();

  return /^[a-z0-9._%+-]+@kongu\.edu$/.test(value);
}