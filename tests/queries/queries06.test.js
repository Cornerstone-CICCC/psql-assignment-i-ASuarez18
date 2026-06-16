const { queryDb } = require("../../testHelper");

describe("Queries 06: Get students enrolled", () => {
  test("42 rows", async () => {
    const res = await queryDb("queries/queries06.sql");
    expect(res.rowCount).toBe(42);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb("queries/queries06.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "id", "class_id"]);
  });
  test("ordered by class_id", async () => {
    const res = await queryDb("queries/queries06.sql");
    const columns = res.rows.map((row) => row.class_id);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(sorted);
  });
});
