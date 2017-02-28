describe('sum component', function() {

  it('should show summary inside #summary', function() {

    browser.url('http://localhost:3000');
    browser.waitForVisible('#summary');

    var firstValue = browser.element('#firstValue');
    var secondValue = browser.element('#secondValue');
    var sumButton = browser.element('#sumButton');
    var summary = browser.element('#summary');

    firstValue.setValue('7');
    secondValue.setValue('5');
    sumButton.click();

    expect(summary.getText()).toBe('12');
  });

});
