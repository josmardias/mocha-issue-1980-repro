'use strict';

const sample = require('../../src/sample');

describe('Sample function', () => {
  it('must return the same passed argument', () => {
    expect(sample("test")).to.equals("test");
  });

  it('must return "value" by default', () => {
    expect(sample()).to.equals("value");
  });
});
