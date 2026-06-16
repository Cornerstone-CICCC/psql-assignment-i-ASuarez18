const { queryDb } = require("../../testHelper");

describe("Queries-in 05: Get avg duration assistance per class", () => {
  test("11 rows", async () => {
    const res = await queryDb(
      "queries-in/queries-in05.sql"
    );
    expect(res.rowCount).toBe(11);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in05.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class", "avg_duration_assistance"]);
  });
  test("ordered by avg_duration_assistance", async () => {
    const res = await queryDb(
      "queries-in/queries-in05.sql"
    );
    const columns = res.rows.map((row) => row.avg_duration_assistance);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
