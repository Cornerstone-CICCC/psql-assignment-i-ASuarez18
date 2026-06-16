const { queryDb } = require("../../testHelper");

describe("Queries-in 10: Get total assistance requests assignment", () => {
  test("424 rows", async () => {
    const res = await queryDb(
      "queries-in/queries-in10.sql"
    );
    expect(res.rowCount).toBe(424);
  });
  test("5 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in10.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual([
      "id",
      "day",
      "chapter",
      "name",
      "total_assistances",
    ]);
  });
  test("ordered by total_assistances", async () => {
    const res = await queryDb(
      "queries-in/queries-in10.sql"
    );
    const columns = res.rows.map((row) => row.total_assistances);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return b - a;
    });
    expect(columns).toEqual(sorted);
  });
});
