describe('Users API endpoints', () => {
  let token = '';
  const name = 'Another Tester';
  const email = 'testuser02@yahoo.com';
  const password = 'password';

  before(() => {
    // Login to Test user
    cy.request({
      method: 'POST',
      url: '/api/auth',
      body: { email, password },
    })
      .its('body')
      .then((response) => {
        token = response.token;
        expect(token).to.not.equal('');
        cy.log('Test user has logged in.');
      });
  });

  beforeEach(() => {
    // Delete existing Test user
    cy.request({
      method: 'DELETE',
      url: '/api/profile',
      headers: { 'x-auth-token': token },
    })
      .its('body')
      .then((response) => {
        expect(response.msg).to.equal('User Deleted');
        cy.log('Existing User has been deleted.');
      });
  });

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
        cy.log('User has been created.');
      });
  });
});
