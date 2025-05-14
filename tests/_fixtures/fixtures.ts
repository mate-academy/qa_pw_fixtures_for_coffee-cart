import { mergeTests } from '@playwright/test';
import { test as menuTest } from './fixturesMenu';
import { test as cartTest } from './fixturesCart';

export const test = mergeTests(cartTest, menuTest);
