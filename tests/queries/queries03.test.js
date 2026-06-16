const { queryDb } = require("../../testHelper");

describe("Queries 03: Total students first 3 classes", () => {
  test("1 row", async () => {
    const res = await queryDb("queries/queries03.sql");
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb("queries/queries03.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["total_students"]);
  });
  test("correct total value", async () => {
    const res = await queryDb("queries/queries03.sql");
    expect(+res.rows[0].total_students).toBe(48);
  });
});
