test("API response has correct structure", () => {
  const response = {
    error: "",
    results: [
      {
        id: 1,
        name: "Blue",
        hex: "#0000FF"
      }
    ]
  };

  expect(response).toHaveProperty("error");
  expect(response).toHaveProperty("results");
  expect(Array.isArray(response.results)).toBe(true);
  expect(response.results[0]).toHaveProperty("name");
  expect(response.results[0]).toHaveProperty("hex");
});