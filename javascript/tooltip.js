$(document).ready(function() {
    // Object to store image paths for each link
    var imagePaths = {
        'https://www.w3schools.com/whatis/whatis_fullstack.asp': 'images/w3schools.png',

        'https://www.php.net/manual/en/intro-whatis.php': 'images/php.png',

        'https://wordpress.org/documentation/customization/': 'images/wordpress.png',

        'https://www.mongodb.com/mern-stack': 'images/mearnstack.png',

        'https://www.nginx.com/?s=web+server+vs+application+sever+': 'images/server functions.png',

        'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview': 'images/server side .png'
    };

    $('[data-toggle="tooltip"]').tooltip({
        title: function() {
            // Get the URL of the hovered link
            var url = $(this).attr('href');

            // Retrieve the corresponding image path from the object
            var imagePath = imagePaths[url];

            // Construct HTML for displaying image in tooltip with a container div
            var tooltipContent = `<div class="tooltip-image-container"><img src="${imagePath}" alt="Screenshot"></div>`;

            return tooltipContent;
        },
        html: true // Enable HTML content in tooltip
    });   
});