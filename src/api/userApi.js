export function saveUser(user) {
  // in real app, make AJAX call and return result
  if (!user.id) {
    user.id = 1;
  }

  return { ...user };
}
