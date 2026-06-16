const { queryDb } = require("../../testHelper");

describe("Queries 04: Students without email or phone", () => {
  test("17 rows", async () => {
    const res = await queryDb("queries/queries04.sql");
    expect(res.rowCount).toBe(17);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb("queries/queries04.sql");
    const columns = res.fields.map((field) => field.name);
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(["student_name"]);
  });
});
