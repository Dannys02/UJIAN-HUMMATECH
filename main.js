// Form contact //
document.getElementById('id-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;
  
  // Validasi Nama (5-20 karakter)
  const name = document.getElementById('name').value.trim();
  const nameError = document.getElementById('name-error');
  if (name.length < 5 || name.length > 20) {
    nameError.textContent = 'Nama harus 5-20 karakter';
    isValid = false;
  } else {
    nameError.textContent = '';
  }
  
  // Validasi Email
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Format email tidak valid';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  
  // Validasi Pesan (tidak kosong)
  const message = document.getElementById('message').value.trim();
  const messageError = document.getElementById('message-error');
  if (message.length === 0) {
    messageError.textContent = 'Pesan tidak boleh kosong';
    isValid = false;
  } else {
    messageError.textContent = '';
  }
  
  if (isValid) {
    alert('Form berhasil dikirim!');
    // Uncomment untuk mengirim form sebenarnya
    location.reload();
  }
});

// Validasi real-time untuk nama (5-20 karakter)
document.getElementById('name').addEventListener('input', function() {
  const name = this.value.trim();
  const nameError = document.getElementById('name-error');
  if (name.length < 5 || name.length > 20) {
    nameError.textContent = 'Nama harus 5-20 karakter';
  } else {
    nameError.textContent = '';
  }
});

// Validasi real-time untuk email
document.getElementById('email').addEventListener('input', function() {
  const email = this.value.trim();
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length > 0 && !emailRegex.test(email)) {
    emailError.textContent = 'Format email tidak valid';
  } else {
    emailError.textContent = '';
  }
});