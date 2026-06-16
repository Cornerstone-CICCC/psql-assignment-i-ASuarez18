const { queryDb } = require("../../testHelper");

describe("Queries-group-by 05: Get enrolled students avg time completion", () => {
  test("42 rows", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by05.sql"
    );
    expect(res.rowCount).toBe(42);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by05.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "average_time"]);
  });
  test("ordered by average_time", async () => {
    const res = await queryDb(
      "queries-group-by/queries-group-by05.sql"
    );
    const columns = res.rows.map((row) => row.average_time);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
