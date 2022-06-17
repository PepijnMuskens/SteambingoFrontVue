/// <refrence types="cypress" />

describe('test home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    })

    it('found dead by daylight', () => {
    
      cy.contains('Dead by Daylight')
    })

  })

   