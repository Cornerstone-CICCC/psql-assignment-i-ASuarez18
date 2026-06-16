const { queryDb } = require("../../testHelper");

describe("Queries-group-by 03: Get classes more 18 students", () => {
  test("5 rows", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by03.sql"
    );
    expect(res.rowCount).toBe(5);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by03.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class_name", "total_students"]);
  });
  test("ordered by total_students", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by03.sql"
    );
    const columns = res.rows.map((row) => row.total_students);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
