const { queryDb } = require("../../testHelper");

describe("Queries joins 02: Get enrolled students with class name", () => {
  test("22 rows", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins02.sql"
    );
    expect(res.rowCount).toBe(22);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb(
      "queries-joins/queries-joins02.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["student_name", "email", "class_name"]);
  });
});
