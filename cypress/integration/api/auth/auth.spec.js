describe('Auth API endpoints', () => {
  let token = '';
  const email = 'sdmunoz@yahoo.com';

  it('Login Auth User', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth',
      body: { email, password: 'password' },
    })
      .its('body')
      .then((response) => {
        token = response.token;
        expect(token).to.not.equal('');
        cy.log('Token:', token);
        cy.log('User logged in successfully!');
      });
  });

  it('Get auth user email from x-auth-token', () => {
    cy.request({
      method: 'GET',
      url: '/api/auth',
      headers: { 'x-auth-token': token },
    })
      .its('body')
      .then((response) => {
        console.log(response);
        expect(email).to.equal(response.email);
        cy.log('Found correct User.');
      });
  });
});
