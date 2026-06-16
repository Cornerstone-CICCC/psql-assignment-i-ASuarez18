const { queryDb } = require("../../testHelper");

describe("Queries 07: Get graduates without github", () => {
  test("6 rows", async () => {
    const res = await queryDb("queries/queries07.sql");
    expect(res.rowCount).toBe(6);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb("queries/queries07.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "email", "phone"]);
  });
});
