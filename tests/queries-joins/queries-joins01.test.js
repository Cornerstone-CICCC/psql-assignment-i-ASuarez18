const { queryDb } = require("../../testHelper.js");

describe("Queries-joins 01: Get students with class name", () => {
  test("172 rows", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins01.sql"
    );
    expect(res.rowCount).toBe(172);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins01.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "email", "class_name"]);
  });
});
