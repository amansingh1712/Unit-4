  /// <reference types="cypress"/>




describe("Counter Tests", function () {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/");

    });


    it("should open in browser", function () {
 
        // cy.visit("http://localhost:3000/");

        cy.get(".counter-btn").should("exist");//should ->expect
        // expect(1).to.be.eq(1);

        cy.get(".doesnexist").should("not.exist");
        // cy.get("#root").should("exist");
        // cy.get("#roo").should("exist");



        //http://localhost:3000
    });

    it("should increment counter", function () {
        // cy.visit("http://localhost:3000/");

        cy.get(".counter-btn").should("have.text","count is: 0");

        cy.get(".counter-btn").click()
        cy.get(".counter-btn").click()
        cy.get(".counter-btn").click()
        cy.get(".counter-btn").click()
        cy.get(".counter-btn").click()
        cy.get(".counter-btn").should("have.text", "count is: 5");
      

    })

    // it.only("should have red color", function () {
    //     // cy.visit("http://localhost:3000/");
    //     cy.get("h3").should("have.css", { color: "red" });
        
    // });
    it("should have red color", function () {
        // cy.visit("http://localhost:3000/");
        cy.get("h3").should("have.css", { color: "red" });
        
    });



    it.only("basic", function () {
        // cy.intercept("GET", "http://localhost:8080/counter", {
        //     value: 1,
        // }).as("counterReq");
        cy.intercept("GET", "http://localhost:8080/counter", {
            value: "hello world",
        }).as("counterReq");



        cy.intercept("POST", "http://localhost:8080/counter",{value:1,}).as("counterReq");

        // cy.get("counter-btn").click();

        cy.wait("@counterReq")

        cy.get(".counter-value").should("have.text","count is: hello world")
    })
})