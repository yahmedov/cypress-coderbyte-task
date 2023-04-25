/// <reference types="cypress" />

import homePage from '../pages/Home';

describe('Home page', () => {
  beforeEach('navigate to', () => {
    cy.visit(homePage.url);
    cy.acceptTermsAndConditions();
  });
  it('should have unique elements in each carousel', () => {
    cy.get(homePage.carousels).each($carousel => {
      cy.wrap($carousel).scrollIntoView();
      cy.wrap($carousel).within($element => {
        cy.wrap($element)
          .get(homePage.carouselItems)
          .get('h3')
          .should(($items) => {
            const carouselItems = [...$items];
            const distinct = new Set(carouselItems);
            expect(distinct).to.have.length(carouselItems.length);
          });
      });
    });
  });
  it('should have 15 items in each carousel', () => {
    // get all carousels on the page
    cy.get(homePage.carousels).each($carousel => {
      // scroll to the carousel
      cy.wrap($carousel).scrollIntoView();
      // inside each carousel
      cy.wrap($carousel).within($element => {
        // get all carousel items and verify
        cy.wrap($element).get(homePage.carouselItems).should('have.length', 15);
      });
    });
  });
});
