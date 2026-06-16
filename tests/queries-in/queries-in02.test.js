const { queryDb } = require("../../testHelper");

describe("Queries-in 02: Get total assistance per student", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-in/queries-in02.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in02.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["total_assistances", "student_name"]);
  });
  test("correct total amount of assistances for Elliot Dickinson", async () => {
    const res = await queryDb(
      "queries-in/queries-in02.sql"
    );
    expect(+res.rows[0].total_assistances).toBe(138);
  });
});
