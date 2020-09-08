describe('Users API endpoints', () => {
  let token = '';
  let userInfo = null;

  before(() => {
    cy.fixture('user-info.json').then((user) => {
      userInfo = user;
    });
  });

  before(() => {
    // Login to Test user
    cy.request({
      method: 'POST',
      url: '/api/auth',
      body: { email: userInfo.email, password: userInfo.password },
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
      body: {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      },
    })
      .its('body')
      .then((response) => {
        token = response.token;
        expect(token).to.not.equal('');
        cy.log('User has been created.');
      });
  });
});
