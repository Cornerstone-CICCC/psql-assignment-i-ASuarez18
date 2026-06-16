const { queryDb } = require("../../testHelper");

describe("Queries-joins 05: Get total time assignments per class", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins05.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins05.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class_name", "total_time"]);
  });
  test("correct total time for FEB12", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins05.sql"
    );
    expect(+res.rows[0].total_time).toBe(373501);
  });
});
