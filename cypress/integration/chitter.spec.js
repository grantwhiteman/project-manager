describe('chitter', () => {
	it('Creates account', () => {
		cy.task("taskTruncateTables")
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
	});
});
