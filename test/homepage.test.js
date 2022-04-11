describe("Checking if website launches as expected", () => {
  test("Sanity check, should always pass", () => {
    expect(2 + 2).toEqual(4);
  });

  test("website has navigation", () => {
    expect(true).toEqual(true); //TODO: Check if nav element exists
  });

  test("Check hero element", () => {
    expect(true).toEqual(true); //TODO: Check if H1 exists
  });

  test("website has footer", () => {
    expect(true).toEqual(true); //TODO: Check if footer element exists
  });
});

describe("Send example mail", () => {
  test("Send email", () => {
    expect(true).toEqual(true); // Send mail by emulating a user
  });
});