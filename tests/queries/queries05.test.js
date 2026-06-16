const { queryDb } = require("../../testHelper");

describe("Queries 05: Students without gmail and phone", () => {
  test("3 rows", async () => {
    const res = await queryDb(
      "queries/queries05.sql"
    );
    expect(res.rowCount).toBe(3);
  });
  test("4 columns with correct names", async () => {
    const res = await queryDb(
      "queries/queries05.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["name", "id", "email", "class_id"]);
  });
});
