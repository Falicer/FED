document.getElementsByTagName("h2").addEventListener(
    'scroll',
    function()
    {
        var scrollTop = document.getElementsByTagName("h2").scrollTop;
        var scrollHeight = document.getElementsByTagName("h2").scrollHeight;
        var offsetHeight = document.getElementsByTagName("h2").offsetHeight;
        var contentHeight = scrollHeight - offsetHeight;
        if (contentHeight <= scrollTop)
        {
            html.addEventListener('scroll', () => {
                logo.style.webkitAnimation = 'none';
                text.style.webkitAnimation = 'none';
                setTimeout(function() {
                  logo.style.webkitAnimation = '';
                  text.style.webkitAnimation = '';
                }, 10);
        }
    },
    false
)