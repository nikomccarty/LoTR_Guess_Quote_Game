import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        urls = [
            'http://lotrproject.com/quotes/',
            'http://lotrproject.com/quotes/all/2',
            'http://lotrproject.com/quotes/all/3',
            'http://lotrproject.com/quotes/all/4',
            'http://lotrproject.com/quotes/all/5',
            'http://lotrproject.com/quotes/all/6',
            'http://lotrproject.com/quotes/all/7'
        ]

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for quote in response.css('.quote'):
            yield {
                'text': quote.css(".text::text").getall(),
                'author': quote.css('.character::text').getall(),
                'source': quote.css('.source::text').getall(),
            }