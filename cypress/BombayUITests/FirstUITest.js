/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Join Dragon Tiger 1 table', () => {
    cy.visit('https://bombaylobby.com/')
    cy.get('[href="https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun"]').click({ force: true })

    //cy.visit('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun');

    cy.origin("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun", () => {
      cy.get("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun").should("have.text", "demo.bombay.live");
    });
    cy.wait(5000);
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

    getIframeBody().find('[data-test-id="generate-username-button"]').click().wait(3000);
    getIframeBody().find('[data-test-id="entry-username-input"]').invoke('val').then(value => {
      const userName1 = value;
      cy.wrap(userName1).as('userName1');
    })
    
    getIframeBody().find('[data-test-id="save-username-button"]').click().wait(3000);
    getIframeBody().find('[data-test-id="button-click-open-menu-modal"]').click().wait(3000);
    getIframeBody().find('#settings').click();
    getIframeBody().find('.current-username').invoke('text').invoke('val').then(value => {
      const userName2 = value;
      cy.wrap(userName2).as('userName2');
    })
/*      cy.log(cy.get('@userName1'));
      cy.log(cy.get('@userName2'));
      expect(cy.get('@userName1')).to.eq(cy.get('@userName2'));*/
  })
})
