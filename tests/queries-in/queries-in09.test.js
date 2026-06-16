const { queryDb } = require("../../testHelper");

describe("Queries-in 09: Get avg total assistance requests class", () => {
  test("1 row", async () => {
    const res = await queryDb(
      "queries-in/queries-in09.sql"
    );
    expect(res.rowCount).toBe(1);
  });
  test("1 column with correct name", async () => {
    const res = await queryDb(
      "queries-in/queries-in09.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["avg_total_duration"]);
  });
  test("correct average duration for wait time", async () => {
    const res = await queryDb(
      "queries-in/queries-in09.sql"
    );
    expect(res.rows[0].avg_total_duration).toEqual({
      hours: 555,
      milliseconds: 909.091,
      minutes: 22,
      seconds: 25,
    });
  });
});
