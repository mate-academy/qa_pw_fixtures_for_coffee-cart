import { mergeTests } from '@playwright/test';
import { test as cartTest } from './fixturesCart';
import { test as menuTest } from './fixturesMenu';

export const test = mergeTests(
  cartTest,
  menuTest
);