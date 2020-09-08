let userInfo = null;

before(() => {
  cy.fixture('user-info.json').then((user) => {
    userInfo = user;
  });
});

describe('Posts API endpoints', () => {
  let token = '';

  before(() => {
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

  it('Add a post to a User', () => {
    cy.request({
      method: 'POST',
      url: '/api/posts',
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
      body: { text: userInfo.loremIpsumPost },
    })
      .its('body')
      .then((response) => {
        expect(response.name).to.equal(userInfo.name);
        expect(response.text).to.equal(userInfo.loremIpsumPost);
        cy.log('User post has been added!');
      });
  });
});
