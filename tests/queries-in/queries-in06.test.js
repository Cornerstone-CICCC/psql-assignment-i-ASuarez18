const { queryDb } = require("../../testHelper");

describe("Queries-in 06: Get class longest assistances", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-in/queries-in06.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("2 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in06.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["class", "avg_duration_assistance"]);
  });
  test("correct average assistance duration for MAR12", async () => {
    const res = await queryDb(
      "queries-in/queries-in06.sql"
    );
    expect(res.rows[0].avg_duration_assistance).toEqual({
      milliseconds: 556.041,
      minutes: 15,
      seconds: 44,
    });
  });
});
