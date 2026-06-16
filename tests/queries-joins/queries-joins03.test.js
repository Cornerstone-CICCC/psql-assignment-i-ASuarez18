const { queryDb } = require("../../testHelper");

describe("Queries-joins 03: Get rollover students.sql", () => {
  test("8 rows", async () => {
    const res = await queryDb("queries-joins/queries-joins03.sql");
    expect(res.rowCount).toBe(8);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb("queries-joins/queries-joins03.sql");
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual([
      "student_name",
      "class_name",
      "student_start_date",
      "class_start_date",
    ]);
  });
  test("ordered by class_start_date", async () => {
    const res = await queryDb("queries-joins/queries-joins03.sql");
    const columns = res.rows.map((row) => row.class_start_date);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    // expect(res.fields.length).toBe(4);
    expect(columns).toEqual(sorted);
  });
});
