import { test, expect } from '@grafana/plugin-e2e';

test('should load dashboard page', async ({ dashboardPage }) => {
  expect(dashboardPage.ctx.page).toHaveTitle('New dashboard - Dashboards - Grafana');
});