describe('Profile API endpoints', () => {
  let token = '';
  let userInfo = null;

  before(() => {
    cy.fixture('user-info.json').then((user) => {
      userInfo = user;
    });
  });

  it('should get all profiles', () => {
    cy.request({
      method: 'GET',
      url: '/api/profile',
    })
      .its('body')
      .then((response) => {
        expect(response.length).to.gt(1);
        cy.log('All profiles retrieved.');
      });
  });

  it('should get a profile by ID', () => {
    cy.request({
      method: 'GET',
      url: '/api/profile/user/' + userInfo.id,
    })
      .its('body')
      .then((response) => {
        console.log(response);
        expect(response.status).to.not.equal(null);
        expect(response.skills).to.not.equal(0);
        cy.log('Retrieved Test Profile');
      });
  });
});
