import { test, expect } from '@playwright/test';

test('new test', async ({page})=>{
    await page.goto('https://polis812.github.io/vacuu/')
    await page.locator('.choose').click()});
    