describe('Users API endpoints', () => {
  let token = '';
  const name = 'Another Tester';
  const email = 'testuser02@yahoo.com';
  const password = 'password';

  it('should test user registration', () => {
    cy.request({
      method: 'POST',
      url: '/api/users',
      body: { name, email, password },
    })
      .its('body')
      .then((response) => {
        token = response.token;
        expect(token).to.not.equal('');
        cy.log('Token:', token);
        cy.log('User has been created.');
      });
  });
});
