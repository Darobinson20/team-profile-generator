const Manager = require("../lib/Manager");

test("create new manager object", () => {
  const name = "Ja Morant";
  const id = "12";
  const email = "ja@nba.com";
  const office = "1";

  const manager = new Manager(name, id, email, office);

  expect(manager.office).toBe("1");
  expect(manager.name).toBe("Ja Morant");
});
test("get manager role", () => {
  const manager = new Manager("Ja Morant");

  expect(manager.getRole()).toBe("Manager");
});

test("get manager office", () => {
  const office = "1";
  const manager = new Manager("Ja Morant", "12", "email", office);

  expect(manager.getOffice()).toBe("1");
});
