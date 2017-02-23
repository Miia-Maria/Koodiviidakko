

function openNews(numberOfNews) {
    numberOfNews = numberOfNews || 0;
    switch (numberOfNews) {
        case 1: window.open("http://www.lianatech.com/news/liana-technologies-news/article/liana-technologies-and-encode-solutions-merge-to-create-unique-mobile-solutions.html", "_self");
            break;
        case 2: window.open("http://www.lianatech.com/news/liana-technologies-news/article/from-a-local-startup-to-a-global-player-liana-technologies-among-the-forerunners-of-digital-marketing-technology.html", "_self");
            break;
        case 3: window.open("http://www.lianatech.com/news/liana-technologies-news/article/liana-technologies-hong-kong-launched-a-series-of-digital-marketing-events-in-june.html", "_self");
            break;
        default: window.open("http://www.lianatech.com/#news", "_self");
            break;
    }
}

function openIntranet() {
    alert("This would open the Intranet");
}

function openCompany() {
    window.open("http://www.lianatech.com/company/liana-technologies.html", "_self");
}

function openProducts() {
    window.open("http://www.lianatech.com/solutions/all-solutions.html", "_self");
}

function contactUs(){
    window.open("http://www.lianatech.com/contact-us.html", "_self");
}

function search() {
    document.getElementById("search").submit();
    alert("You tried to search something");
}

function openReferences(numberOfReference) {
    numberOfReference = numberOfReference || 0;
    switch (numberOfReference) {
        case 1: window.open("http://www.bosch-home.fi/", "_self");
            break;
        case 2: window.open("http://www.thebodyshop.fi/fi/", "_self");
            break;
        case 3: window.open("https://www.laplandhotels.com/", "_self");
            break;
        case 4: window.open("http://www.ikea.com/fi/fi/", "_self");
            break;
    }
}

function subscribe() {
    document.getElementById("subscribeEmail").submit();
    alert("Your email addrees is subscribed");
}

function openSocialMedia(socialMedia) {
    socialMedia = socialMedia || 0;
    switch (socialMedia) {
        case 'facebook': window.open("https://www.facebook.com/lianatech/?fref=ts", "_self");
            break;
        case 'twitter': window.open("https://twitter.com/LianaTech", "_self");
            break;
        case 'linkedin': window.open("https://www.linkedin.com/company-beta/2805912/", "_self");
            break;
    }

}

function learnMore() {

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("LearnButton");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}