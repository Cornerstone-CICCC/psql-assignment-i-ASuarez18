const { queryDb } = require("../../testHelper");

describe("Queries-joins 07: Get total submissions enrolled students less 100", () => {
  test("2 rows", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins07.sql"
    );
    expect(res.rowCount).toBe(2);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins07.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student", "total_submissions"]);
  });
});
