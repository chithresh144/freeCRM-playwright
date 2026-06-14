import { test } from '@playwright/test';
import { LoginFreeCRMPage } from './pages/LoginfreeCRMPage';
import { CompanyPage } from './pages/CompanyPage';
import { testContext } from './utils/testContext';

test.describe.serial('Free CRM Company Flow', () => {

  test('Create Company', async ({ page }) => {
    const loginPage = new LoginFreeCRMPage(page);
    await loginPage.navigate();

    const newTab = await loginPage.login();
    const companyPage = new CompanyPage(newTab);

    await companyPage.navigateToCompanies();
    await companyPage.clickAddCompany();
    await companyPage.fillCompanyDetails(testContext);

    // ✅ Screenshot
    const screenshot = await newTab.screenshot();
    await test.info().attach('Create Company Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });

  test('Search Company', async ({ page }) => {
    const loginPage = new LoginFreeCRMPage(page);
    await loginPage.navigate();

    const newTab = await loginPage.login();
    const companyPage = new CompanyPage(newTab);

    await companyPage.navigateToCompanies();
    await companyPage.searchCompany(testContext);

    // ✅ Screenshot
    const screenshot = await newTab.screenshot();
    await test.info().attach('Search Company Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });

  test('Edit Company', async ({ page }) => {
    const loginPage = new LoginFreeCRMPage(page);
    await loginPage.navigate();

    const newTab = await loginPage.login();
    const companyPage = new CompanyPage(newTab);

    await companyPage.navigateToCompanies();
    await companyPage.editdetails(testContext);

    // ✅ Screenshot
    const screenshot = await newTab.screenshot();
    await test.info().attach('Edit Company Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });

  test('Delete Company', async ({ page }) => {
    const loginPage = new LoginFreeCRMPage(page);
    await loginPage.navigate();

    const newTab = await loginPage.login();
    const companyPage = new CompanyPage(newTab);

    await companyPage.navigateToCompanies();
    await companyPage.deleteCompany(testContext);

    // ✅ Screenshot
    const screenshot = await newTab.screenshot();
    await test.info().attach('Delete Company Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });

});
