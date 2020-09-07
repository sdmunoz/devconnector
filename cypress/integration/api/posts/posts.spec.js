describe('Posts API endpoints', () => {
  let token = '';
  const name = 'Another Tester';
  const email = 'testuser02@yahoo.com';
  const password = 'password';
  const text =
    'Fusce ullamcorper molestie tincidunt. Donec id vulputate ipsum. Nulla iaculis quis elit sed accumsan. Morbi pretium justo nisl, vel hendrerit felis mollis a. Mauris id justo commodo, eleifend tellus ut, pellentesque diam. Suspendisse a lobortis dolor. Praesent non massa libero. In a turpis ut magna ultricies aliquam nec nec justo. Sed quis euismod risus.';

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

  it('Add a post to a User', () => {
    cy.request({
      method: 'POST',
      url: '/api/posts',
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
      body: { text },
    })
      .its('body')
      .then((response) => {
        expect(response.name).to.equal(name);
        expect(response.text).to.equal(text);
        cy.log('User post has been added!');
      });
  });
});
