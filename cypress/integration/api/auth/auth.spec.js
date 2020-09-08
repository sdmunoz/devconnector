describe('Auth API endpoints', () => {
  let token = '';
  let userInfo = null;

  before(() => {
    cy.fixture('user-info.json').then((user) => {
      userInfo = user;
    });
  });

  it('Login Auth User', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth',
      body: { email: userInfo.email, password: userInfo.password },
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
        expect(userInfo.email).to.equal(response.email);
        cy.log('Found correct User.');
      });
  });
});
