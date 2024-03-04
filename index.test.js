const { getOz } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when getOz(1)', () => {
    expect(getOz(1)).toBe(16);
  });
  test('when getOz(4)', () => {
    expect(getOz(4)).toBe(64);
  });
  test('when getOz(0)', () => {
    expect(getOz(0)).toBe(0);
  });
  test('when getOz(2)', () => {
    expect(getOz(2)).toBe(32);
  });
  test('when getOz(10)', () => {
    expect(getOz(10)).toBe(160);
  });
});
