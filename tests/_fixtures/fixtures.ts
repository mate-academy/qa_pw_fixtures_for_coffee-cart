import { mergeTests } from '@playwright/test';
import { test as menuPageTest } from './fixturesMenuPage';
import { test as cartPageTest } from './fixturesCartPage';
import { test as formatter } from './fixturesFormatter';

export const test = mergeTests(menuPageTest, cartPageTest, formatter);
