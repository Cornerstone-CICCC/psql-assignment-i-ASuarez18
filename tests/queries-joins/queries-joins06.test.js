const { queryDb } = require("../../testHelper");

describe("Queries-joins 06: Get total submissions enrolled students", () => {
  test("42 rows", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins06.sql"
    );
    expect(res.rowCount).toBe(42);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins06.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student", "total_submissions"]);
  });
});
