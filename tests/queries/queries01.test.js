const { queryDb } = require("../../testHelper");

describe("Queries 01: Get Students without Github", () => {
  test("20 rows", async () => {
    const res = await queryDb("queries/queries01.sql");
    expect(res.rowCount).toBe(20);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb("queries/queries01.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["id", "name", "email", "class_id"]);
  });
  test("ordered by class_id", async () => {
    const res = await queryDb("queries/queries01.sql");
    const columns = res.rows.map((row) => row.class_id);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(sorted);
  });
});
