

describe('title', function() {
  it('should have a title contains', function() {
    browser.get('file:///C:/Users/adhabale/MySiteProtractor/case6/index.html');
browser.getTitle('Addition').then(console.log);//title checking
browser.getCurrentUrl().then(console.log);//getting url
//expect(element(by.css('div')).getText().then(console.log));//geting text in that division
//expect(element(by.css('button')).click());//finding link and clicking and redirecting 
element(by.model('num1')).sendKeys('11');
element(by.model('num2')).sendKeys('11');
element(by.css('button')).click();
element(by.css('p')).getText().then(console.log);
browser.pause();

});

});                                                                                                                    