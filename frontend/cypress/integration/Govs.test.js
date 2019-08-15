/* eslint no-undef: 0 */

describe("Govs", () => {
  beforeEach(() => {
    cy.fixture("models/govs").as("govs");
    cy.server();
    cy.route({
      method: "GET",
      url: "**/govs",
      response: [
        {
          govId: 1,
          country: "United States",
          averageRating: 4.7
        },
        {
          govId: 2,
          country: "United Kingdom",
          averageRating: 3.5
        },
        {
          govId: 3,
          country: "Germany",
          averageRating: 4.1
        }
      ]
    });
    cy.visit("/govs");
  });

  it("should see a list of govs", () => {
    cy.get(".TableBody__element").contains("United States");
    cy.get(".TableBody__element").contains("United Kingdom");
    cy.get(".TableBody__element").contains("Germany");
  });

  it("should show headline", () => {
    cy.get(".Headline").contains("Rate your Governments!");
  });

  it("should see a search box", () => {
    cy.get(".SearchBox");
  });
});
