export class PageObject {

    login() {
        cy.get('#btnShowLogin').click()
        cy.get('#username').type('o.kupchuk')
        cy.get('#kc-login').click()
        cy.get('#password').type('R0iBqeJLi672')
        cy.get('#kc-login').click()
    }

    acceptCooki() {
        cy.get('*[class^= "EtkPrivacyPolicyWarningPopup__btn ml-0 surface v-btn v-btn--rounded v-btn--text theme--dark v-size--default"]').click()
    }

    clickOnButtonAddNew() {
        cy.get('*[class^= "EwzCreateContentMenu__activator v-btn v-btn--has-bg v-btn--rounded theme--light v-size--default primary"]').click()
    }

    selectFolder() {
        cy.get("[data-id='EwzCreateContentMenu__folder']").click()
    }

    createFolder() {
        cy.get('input[maxlength="100"]').clear()
        cy.get('input[maxlength="100"]').type('Name_folder')
        cy.get('*[class^= "v-btn v-btn--rounded v-btn--text theme--light v-size--default primary--text"]').click()
    }

    renameFolder() {
        cy.get("[data-id='drop-folder-wrapper']").first()
        cy.get('*[class^= "mr-1 v-btn v-btn--icon v-btn--round v-btn--text theme--light v-size--default"]').first().click()
            .get('div[title="Rename"]').click()
        
        cy.get('input[maxlength="100"]').clear()
        cy.get('input[maxlength="100"]').type("New_Name_Folder")
        cy.get('*[class^= "v-btn v-btn--rounded v-btn--text theme--light v-size--default primary--text"]').click()
    }

    deleteFolder() {
        cy.get("[data-id='drop-folder-wrapper']").first()
        cy.get('*[class^= "mr-1 v-btn v-btn--icon v-btn--round v-btn--text theme--light v-size--default"]').first().click()
            .get('div[title="Delete"]').first().click()

        cy.get('*[class^= "subtitle-1 v-btn v-btn--rounded v-btn--text theme--light v-size--default primary--text"]').click()
    }
}