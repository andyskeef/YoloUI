/// <reference types="Cypress" />

describe('My Second Test', () => {
  it('Add BollyWood Stars to Favourite tab', () => {
    //cy.visit('https://bombaylobby.com/')
    //cy.get('[href="https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun"]').click({ force: true })
    cy.visit('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun');
    cy.wait(5000);

    //cy.origin('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun', () => {
    //cy.visit('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun')
    //cy.url().should('include', "demo.bombay.live")
    
    const getIframeDocument = () => {
      return cy
        .get('#iframeId')
        .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
      return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
    }

    getIframeBody().find('[data-test-id="generate-username-button"]').click({ force: true });
    getIframeBody().find('[data-test-id="entry-username-input"]').wait(1000);
    getIframeBody().find('[data-test-id="save-username-button"]').click({ force: true }).wait(1000);
    getIframeBody().find('.category-indianGames-icon').click({ force: true }).wait(1000);
    getIframeBody().find('.bollywood-stars').find('[data-testid="FavouriteButton"]').click({ force: true });
    getIframeBody().find('.category-favourites-icon').click({ force: true });
    getIframeBody().find('.bollywood-stars').should('be.visible').pause();
  })
})