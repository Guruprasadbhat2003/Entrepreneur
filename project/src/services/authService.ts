interface User {
  name: string;
  email: string;
  password: string;
}

export const signup = async (name: string, email: string, password: string): Promise<boolean> => {
  const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert('User already exists');
    return false;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const login = async (email: string, password: string): Promise<User | null> => {
  const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];
  const foundUser = users.find((user) => user.email === email && user.password === password);
  
  if (foundUser) {
    return foundUser;
  } else {
    alert('Invalid credentials');
    return null;
  }
};
