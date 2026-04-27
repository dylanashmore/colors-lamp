function formatColorName(name) {
  return name.trim().toLowerCase();
}

function isValidHexColor(color) {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

test("formats color names correctly", () => {
  expect(formatColorName("  Blue  ")).toBe("blue");
});

test("validates hex color format", () => {
  expect(isValidHexColor("#FFAA00")).toBe(true);
  expect(isValidHexColor("blue")).toBe(false);
});