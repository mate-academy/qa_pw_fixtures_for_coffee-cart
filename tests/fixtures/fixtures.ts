import { mergeTests } from '@playwright/test';
import { test as cartPage} from './cartPageFixture';
import { test as menuPage} from './menuPageFixture';

export const test = mergeTests(
  cartPage,
  menuPage,
);