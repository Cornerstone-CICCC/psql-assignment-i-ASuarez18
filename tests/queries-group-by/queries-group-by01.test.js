const { queryDb } = require("../../testHelper");

describe("Queries-group-by 01: Get total assignments per day", () => {
  test("51 rows", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by01.sql"
    );
    expect(res.rowCount).toBe(51);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by01.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["day", "total_assignments"]);
  });
  test("ordered by day", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by01.sql"
    );
    const columns = res.rows.map((row) => row.day);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
