const { queryDb } = require("../../testHelper");

describe("Queries-in 01: Get total assistance requests instructor", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-in/queries-in01.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in01.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["total_assistances", "instructor_name"]);
  });
  test("correct total amount of assistances for Waylon Boehm", async () => {
    const res = await queryDb(
      "queries-in/queries-in01.sql"
    );
    expect(+res.rows[0].total_assistances).toBe(4227);
  });
});
