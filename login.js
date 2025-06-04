import { supabase } from './supabase-client.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messageBox = document.getElementById('loginMessage');

  messageBox.textContent = '';
  messageBox.className = 'message';

  // Look up the user by email
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !user) {
    messageBox.textContent = 'User not found.';
    messageBox.classList.add('error');
    return;
  }

  if (user.password !== password) {
    messageBox.textContent = 'Incorrect password.';
    messageBox.classList.add('error');
    return;
  }

  // Successful login
  messageBox.textContent = `Welcome, ${user.full_name}! Redirecting...`;
  messageBox.classList.add('success');

  // Optionally store user info in localStorage
  localStorage.setItem('user_id', user.id);
  localStorage.setItem('user_name', user.full_name);

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = 'profile.html';
  }, 1500);
});
