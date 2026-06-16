const { queryDb } = require("../../testHelper");

describe("Queries-joins 04: Get total time assignments per student", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins04.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins04.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "total_time"]);
  });
  test("correct total time for Ibrahim Schimmel", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins04.sql"
    );
    expect(+res.rows[0].total_time).toBe(6888);
  });
});
