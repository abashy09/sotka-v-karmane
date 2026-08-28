import { defineConfig } from "@playwright/test";

// Playwright конфиг для e2e-тестов Сотки.
// Ожидает уже запущенный dev-сервер по BASE_URL (по умолчанию localhost:8080).
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["github"]] : "list",
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:8080",
    headless: true,
    viewport: { width: 1280, height: 1800 },
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
