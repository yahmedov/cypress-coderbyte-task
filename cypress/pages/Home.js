class HomePage {
    get url () { return 'https://www.mall.cz' }
    get carousels () { return '[data-testid="cms-carousel"]' }
    get carouselItems () { return '[data-testid="cms-carousel-slide"] article' }
}

export default new HomePage();
