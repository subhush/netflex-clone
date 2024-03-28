document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.querySelector('.scroll-left-button');
    const scrollRightButton = document.querySelector('.scroll-right-button');
    const trendingMoviesScroller = document.querySelector('.trending-movies-scroller');
    const trendingMoviesContainer = document.querySelector('.trending-movies-container');

    scrollRightButton.addEventListener('click', function() {
        trendingMoviesScroller.scrollBy({
            left: 900, 
            behavior: 'smooth'
        });
    });

    scrollLeftButton.addEventListener('click', function() {
        trendingMoviesScroller.scrollBy({
            left: -780, 
            behavior: 'smooth'
        });
    });

    
});