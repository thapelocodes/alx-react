import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("Returns the current year", () => {
  expect(getFullYear()).toBe(2024);
});

test("Correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("Returns right notification", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
