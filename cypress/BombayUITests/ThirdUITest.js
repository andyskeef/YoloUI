/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Change Language To Deutch', () => {
      cy.visit('https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun');
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
  
      getIframeBody().find('[data-test-id="generate-username-button"]').click({force: true});
      getIframeBody().find('[data-test-id="entry-username-input"]').wait(1000);
      getIframeBody().find('[data-test-id="save-username-button"]').click({force: true}).wait(1000);
      getIframeBody().find('[data-test-id="button-click-open-menu-modal"]').click({force: true});
      getIframeBody().find('#settings').click({force: true});
      getIframeBody().find('.language-switch-component').find('[data-test-id="button-click-edit-username-in-settings"]').click({ force: true });
      getIframeBody().find('[data-test-id="button-menu-language-de"]').click({force: true});
      getIframeBody().find('.nav-menu').click({force: true});
      getIframeBody().find('[data-test-id="generic-scrollable-container-navigation-page-header"]').contains('Einstellungen');
      getIframeBody().find('#close').click({force: true});
      getIframeBody().find('.balance-block').contains('Guthaben').pause();
      
    })
  })
