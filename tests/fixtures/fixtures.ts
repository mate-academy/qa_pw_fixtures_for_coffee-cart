import { mergeTests } from '@playwright/test';
import { test as menuPageTest } from './fixturesMenuPage';
import { test as cartPageTest } from './fixturesCartPage';

export const test = mergeTests(menuPageTest, cartPageTest);