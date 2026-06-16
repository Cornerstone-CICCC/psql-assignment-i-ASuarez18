const { queryDb } = require("../../testHelper");

describe("Queries-in 11: Get total assignment duration day", () => {
  test("51 rows", async () => {
    const res = await queryDb(
      "queries-in/queries-in11.sql"
    );
    expect(res.rowCount).toBe(51);
  });
  test("3 columns with correct names", async () => {
    const res = await queryDb(
      "queries-in/queries-in11.sql"
    );
    const columns = res.fields.map((field) => field.name);
    expect(columns).toEqual(["day", "number_of_assignments", "total_duration"]);
  });
  test("ordered by total_assistances", async () => {
    const res = await queryDb(
      "queries-in/queries-in11.sql"
    );
    const columns = res.rows.map((row) => row.day);
    const sorted = [...columns].sort((a, b) => {
      if (a === null) return 1;
      else return a - b;
    });
    expect(columns).toEqual(sorted);
  });
});
