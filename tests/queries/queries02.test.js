const { queryDb } = require("../../testHelper");

describe("Queries 02: Get Students in class", () => {
  test("18 rows", async () => {
    const res = await queryDb("queries/queries02.sql");
    expect(res.rowCount).toBe(18);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb("queries/queries02.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["id", "name"]);
  });
  test("ordered alphabetically", async () => {
    const res = await queryDb("queries/queries02.sql");
    const columns = res.rows.map((row) => row.name);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
