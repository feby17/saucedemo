const createCase = (title, username, password, assertionKey, expected = 'error', submitType = 'click') => ({
    title,
    username,
    password,
    expected,
    assertionKey,
    submitType,

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
    createCase(
      'Login dengan huruf kapital di username', //title
      'STANDARD_USER', // username
      Cypress.env('PASSWORD'),// password
      'gagal_login',// assertionKey
    ),
    createCase(
      'Login dengan password huruf kapital',
      Cypress.env('standard_user'),
      'SECRET_SAUCE',
      'gagal_login',
    ),
    createCase(
      'Login dengan spasi di username',
      'standard_user ',
      Cypress.env('PASSWORD'),
      'gagal_login',
    ),
    createCase(
      'Login pakai angka saja',
      '1234',
      '1234',
      'gagal_login',
    ),
    createCase(
      'Coba masukkan script di form login',
      '<script>',
      Cypress.env('PASSWORD'),// password
      'gagal_login',
    ),
    createCase(
      'Login dengan spasi di tengah username',
      'standart user',
      'SECRET_SAUCE',
      'gagal_login',
    ),
    createCase(
      'Login dengan akun performance_glitch_user',
      'performance_glitch_user',
      Cypress.env('PASSWORD'),// password
      'Success_Login',
    ),
    createCase(
      'Login dengan akun error_user',
      'error_user',
      Cypress.env('PASSWORD'),// password
      'Success_Login',
    ),
    createCase(
      'Login dengan akun visual_user',
      'visual_user',
       Cypress.env('PASSWORD'),// password
       'Success_Login',
      ),
    createCase(
      'Login dengan tekan Enter',
      Cypress.env('standard_user'),
      Cypress.env('PASSWORD'),
      'Success_Login',
      'success',
      'enter' 
    ),
    ];
    for (let i = 0; i < 5; i++) {
      loginTestCases.push(
        createCase(
          `Coba login gagal ke-${i + 1}`,
          Cypress.env('standard_user'),
          'SECRET_SAUCE',
          'gagal_login'
        )
      );
    }
      [
  ];
  