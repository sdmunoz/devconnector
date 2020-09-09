let userInfo = null;

before(() => {
  cy.fixture('user-info.json').then((user) => {
    userInfo = user;
  });
});

describe('Posts API endpoints', () => {
  let token = '';
  let postId = null;

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
        postId = response._id;
        expect(response.name).to.equal(userInfo.name);
        expect(response.text).to.equal(userInfo.loremIpsumPost);
        cy.log('User post has been added!');
      });
  });

  it('should get all post', () => {
    cy.request({
      method: 'GET',
      url: '/api/posts',
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
    })
      .its('body')
      .then((response) => {
        expect(response.length).to.be.gt(0);
        cy.log('All posts were retrieved.');
      });
  });

  it('should get post by id', () => {
    cy.request({
      method: 'GET',
      url: '/api/posts/' + postId,
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
    })
      .its('body')
      .then((response) => {
        expect(response._id).to.equal(postId);
        cy.log('A post was retrieved by ID');
      });
  });

  it('should delete post by id', () => {
    cy.request({
      method: 'DELETE',
      url: '/api/posts/' + postId,
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
    })
      .its('body')
      .then((response) => {
        console.log(response);
        expect(response.msg).to.equal('Post removed');
        cy.log('A post was retrieved by ID');
      });
  });
});
