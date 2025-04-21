const createCase = (title, username, password, assertionKey, expected = 'error') => ({
    title,
    username,
    password,
    expected,
    assertionKey,
  });
  
  export const loginTestCases = [
    createCase(
      'Login berhasil dengan akun biasa',
      Cypress.env('standard_user'),
      Cypress.env('PASSWORD'),
      'Success_Login',
      'success'
    ),
    createCase(
      'Gagal login karena akun dikunci',
      Cypress.env('locked_out_user'),
      Cypress.env('PASSWORD'),
      'locked_account'
    ),
    createCase(
      'Gagal login karena password salah',
      'salah_user',
      'salah_password',
      'gagal_login'
    ),
    createCase(
      'Gagal login karena username kosong',
      '',
      Cypress.env('PASSWORD'),
      'username_kosong'
    ),
    createCase(
      'Login tanpa isi apapun',
      '',
      '',
      'username_kosong'
    ),
    createCase(
      'Login tanpa username',
      '',
      Cypress.env('PASSWORD'),
      'username_kosong'
    ),
    createCase(
      'Login tanpa password',
      Cypress.env('standard_user'),
      '',
      'password_kosong'
    ),
  ];
  