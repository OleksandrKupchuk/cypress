import { PageObject } from "./page_object"

context('Actions', () => {
    const pageObject = new PageObject()

    beforeEach(() => {
        cy.visit('https://dev3.ewizard.io/library/#/content/library')
        pageObject.login()
        pageObject.acceptCooki()
    })

    // https://on.cypress.io/interacting-with-elements

    it('Create folder', () => {
        pageObject.clickOnButtonAddNew()
        pageObject.selectFolder()

        pageObject.createFolder()
    })

    it('Rename folder', () => {
        pageObject.renameFolder()
    })

    it('Delete folder', () => {
        pageObject.deleteFolder()
    })
})
