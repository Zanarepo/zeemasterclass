import { supabase } from './supabase-client.js';

async function registerUser(userData) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData]);

  if (error) {
    console.error('Registration failed:', error.message);
    alert('Registration failed.');
  } else {
    alert('Registration successful!');
    console.log('User added:', data);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
      full_name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value, // ⚠️ hash in production
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim(),
    };

    await registerUser(userData);
    form.reset();
  });
});
