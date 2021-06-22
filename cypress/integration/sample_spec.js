describe('My First Test', function () {
    it('Visits a page, enters and checks email', function (){
        cy.visit('https://example.cypress.io') //Access cypress commands through golbal "cy" object. "visit" command visits a page
        
        cy.pause() //Command for debugging, can help to debug in a more interactive way. Test will pause at this point and GUI will allow next steps to be stepped through before resuming test.

        cy.contains('type').click() //Find an element on the page that contains the string 'type'. Test will fail if element is not found, do not need to add an assertion, it is built into cypress. ".click()" simulates clicking the element that was found.

        cy.url() //Accesses the URL in the address bar, we want to check that the correct URL was fetched from the link
            .should('include', '/commands/actions')//".should()" makes an assertion. This will check that the URL in the address bar includes what is expected to be accessed by clicking on the 'type' element from above.
        
        cy.get('.action-email') //Find an element based on a CSS class, pass the ".get" command the class name
            .type('fake@email.com') //Chain ".type" command to type text into the element that was selected from ".get" command
            .should('have.value', 'fake@email.com')// Assert to verify the value in the input contains what was typed
    })
})