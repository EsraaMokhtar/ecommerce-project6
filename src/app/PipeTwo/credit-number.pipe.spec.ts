import { CreditNumber } from './credit-number.pipe';

describe('CreditNumber', () => {
  it('create an instance', () => {
    const pipe = new CreditNumber();
    expect(pipe).toBeTruthy();
  });
});

