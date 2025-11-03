import { mergeTests } from '@playwright/test';
import { test as cartPage } from './fixturesPages';
import { test as menuPage } from './fixturesPages';

export const test = mergeTests(cartPage, menuPage);
