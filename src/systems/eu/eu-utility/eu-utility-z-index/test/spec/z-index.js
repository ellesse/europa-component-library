describe('z-index', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(500);
    browser.goToComponent('eu-utility-z-index');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'z-index',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
