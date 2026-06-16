const { queryDb } = require("../../testHelper");

describe("Queries-group-by 04: Get total submissions per class", () => {
  test("11 rows", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by04.sql"
    );
    expect(res.rowCount).toBe(11);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by04.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class_name", "total_submissions"]);
  });
  test("ordered by total_submissions", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by04.sql"
    );
    const columns = res.rows.map((row) => row.total_submissions);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
