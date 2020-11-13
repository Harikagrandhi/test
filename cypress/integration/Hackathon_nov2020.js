/// <reference types="@applitools/eyes-cypress" />
/// <reference types="cypress" />
Cypress.config('eyesTimeout', 1000000000)

import { appName } from "../../applitools.config";


describe('Hackathon 2020', () => {
    beforeEach(() => {
        cy.eyesOpen({           
                   
            browser: [
                { width: 1200, height: 800, name: 'firefox'},
                { width: 1200, height: 800, name: 'chrome'},
                { width: 1200, height: 800, name: 'edgechromium'},
                { width: 1200, height: 800, name: 'safari' },
                
               {
                    iosDeviceInfo: {
                        deviceName: 'iPhone X'
                    }
                },
            ]
        });
    });
    afterEach(() => {
        cy.eyesClose();
        
    });

    it('Test 1', function () {
        //PASS URL while executing the run npx cypress run --config baseUrl="URL" --spec 
     cy.visit('/');
     cy.eyesCheckWindow('main Page');       
    })
    it("Test 2", function () {
         //Filter based on black color
        cy.get('#SPAN__checkmark__107').click();        
        cy.get('#filterBtn').click();       
        cy.eyesCheckWindow({
            tag: 'filter by color',
            target: 'region',
            selector: '#product_grid.row.small-gutters'
        });
        cy.get('#resetBtn').click();
    })

    it("Test 3", () => {
        //Select the Product
      cy.get('#H3____218').click();     
      cy.eyesCheckWindow('product details');

    })

 })