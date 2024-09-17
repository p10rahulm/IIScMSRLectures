// first time load
document.addEventListener("DOMContentLoaded", start);
//on accessing page via history
window.onpopstate = function (event) {
    reloadonHistory(event.state)
};


function start() {
    let contentUrl = getContentUrl();
    //Load Home
    loadHome(contentUrl);
    //Load Seminars
    // loadTalks(contentUrl, "files.list");
    //Load part of page thats relevant
    // loadPage();
    //Load Swipes
    // oneRingToSwipemAll();

}

function reloadonHistory(eventState) {
    if (!eventState) {
        window.location.reload();
        return;
    }
    let contentUrl = getContentUrl();
    // loadTalks(contentUrl, "files.list");
    loadHome(eventState.contentUrl);
    // loadPage();
}

function loadPage() {
    const hash = window.location.hash;
    clickNav("navbar-Talks");
}

function loadPageOld() {
    const hash = window.location.hash;
    if (!hash) {
        clickNav("navbar-Home");
    } else if (hash == "#Talks") {
        clickNav("navbar-Talks");
    } else if (hash == "#Visits") {
        clickNav("navbar-Visits");
    } else if (hash == "#JoinUs") {
        clickNav("navbar-JoinUs");
    }
}

//Try not to use below function as it's blocking code
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    console.log("filePath=", filePath);
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function loadFileAsync(filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, true);
    xmlhttp.send();
    return xmlhttp;
}

function getContentUrl() {


    let contentUrl;
    const indexOfIndex = window.location.pathname.indexOf("index.html");
    if (indexOfIndex === -1) {
        contentUrl = window.location.origin + window.location.pathname + 'content/'
    } else {
        contentUrl = window.location.origin + window.location.pathname.substr(0, indexOfIndex) + 'content/'
    }
    return contentUrl
}

function clickLogo() {

    const homeUrl = window.location.origin + window.location.pathname;
    const homeTitle = "IISc-Microsoft Research Seminar Series";

    let contentUrl = getContentUrl();
    const homeState = {"title": homeTitle, "url": homeUrl, "contentUrl": contentUrl};
    history.pushState(homeState, homeTitle, homeUrl);

    loadHome(contentUrl);
}

function clickTalk(talkTitle, talkUrl) {

    let contentUrl;
    const indexOfIndex = window.location.pathname.indexOf("index.html");
    if (indexOfIndex === -1) {
        contentUrl = window.location.origin + window.location.pathname + 'content/'
    } else {
        contentUrl = window.location.origin + window.location.pathname.substr(0, indexOfIndex) + 'content/'
    }

    const talkState = {"title": talkTitle, "url": talkUrl, "contentUrl": contentUrl};
    history.pushState(talkState, talkTitle, talkUrl);
    loadHome(contentUrl);
}

function generateTalkHTML(talkHTTP, talkName) {
    const seminarContents = talkHTTP.responseText;
    [seminar, seminarDate, seminarName] = createTalk(seminarContents, talkName + ".md", 1);
    const seminarHome = document.createElement("div");
    seminarHome.id = "seminarHome";
    seminarHome.className = "home-text";
    seminarHome.appendChild(seminar);
    const homeDiv = document.getElementById("Talks");
    homeDiv.appendChild(seminarHome);
    //set document title
    document.title = seminarName
    //reset Mathjax typesetting
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, seminarHome]);
}

function removeChildren(someDiv) {
    while (someDiv.hasChildNodes()) {
        someDiv.removeChild(someDiv.firstChild);
    }
}

function loadHome(contentUrl) {
    //Clear Home
    // sponsorMessage = document.getElementById("sponsor-thanks")

    removeChildren(document.getElementById("Talks"));
    removeChildren(document.getElementById("talks-navigation"));
    // clickNav("navbar-Talks");
    query = getSearchString();
    const talkIndex = query.indexOf("talk=")
    if (talkIndex === -1) {
        const sponsorMessage = document.createElement("div")
        sponsorMessage.classList.add("main");
        sponsorMessage.id = "sponsor-thanks";
        sponsorMessage.innerHTML = "We are grateful to the " +
            "<a href = 'https://www.accel.com/people/shekhar-kirani' target= '_blank>Shekhar Kirani</a> family and the " +
            "<a href = 'https://www.csa.iisc.ac.in/cfe-walmart/' target= '_blank'>Walmart Center for Tech " +
            "Excellence</a> for generously supporting this seminar series."
        document.getElementById("talks-navigation").appendChild(sponsorMessage)
        loadTalks(contentUrl, "files.list");
    } else {
        let talkName = query.substr(talkIndex + 5);
        const talkHttp = loadFileAsync(contentUrl + "seminars/" + talkName + ".md");
        talkHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                generateTalkHTML(this, talkName);
            }
        }
    }
}

function loadHomeOld(contentUrl) {
    //Clear Home
    removeChildren(document.getElementById("Home"));
    clickNav("navbar-Home");
    query = getSearchString();
    const talkIndex = query.indexOf("talk=")
    if (talkIndex == -1) {
        generateHomeHTML(contentUrl);
    } else {
        let talkName = query.substr(talkIndex + 5);
        const talkHttp = loadFileAsync(contentUrl + "seminars/" + talkName + ".md");
        talkHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                generateTalkHTML(this, talkName);
            }
        }
    }
}

function getSearchString() {
    return window.location.search;
}

function loadIntroText(introResponse, parentDiv) {
    //Introduction
    const introPart = document.createElement("div");
    introPart.className = "home-text"
    para = introResponse.responseText;
    paraS = para.split("~~~");

    for (let i = 0; i < paraS.length; i++) {
        let para = document.createElement("div");
        para.className = "home-textpara";
        para.innerHTML = paraS[i];
        introPart.appendChild(para);
    }
    parentDiv.appendChild(introPart);
}

function loadCollaborators(collabResponse, parentDiv) {
    //Collaborators Heading
    const collabHeading = document.createElement("div");
    collabHeading.className = "home-header";
    collabHeading.innerHTML = "Collaborators";
    collabHeading.id = "collaborators-heading"
    parentDiv.appendChild(collabHeading);

    //Create Page
    const institutes = document.createElement("div");
    institutes.className = "home-text";
    institutes.id = "institutions"
    instisData = collabResponse.responseText;
    instisDataS = instisData.split("+++");
    for (let i = 0; i < instisDataS.length; i++) {
        let institute = document.createElement("div");
        institute.className = "institute";

        let instiData = instisDataS[i].trim();
        let instiDataS = instiData.split("\n");

        let instituteName = document.createElement("div");
        instituteName.className = "institute-name";
        let instituteLink = document.createElement('a');
        instituteLink.className = "institute-name-link";
        instituteLink.target = "_blank";
        instiNameSplit = instiDataS[0].split("||");
        instituteLink.href = instiNameSplit[1];
        instituteLink.innerHTML = instiNameSplit[0];
        instituteName.appendChild(instituteLink);
        institute.appendChild(instituteName);
        uldiv = document.createElement("ul");
        for (let j = 1; j < instiDataS.length; j++) {
            let lidiv = document.createElement("li");
            let personName = document.createElement("a");
            personName.className = "name";
            personName.target = "_blank";
            nameSplit = instiDataS[j].split("||");
            personName.href = nameSplit[1];
            personName.innerHTML = nameSplit[0];
            lidiv.appendChild(personName);
            uldiv.appendChild(lidiv);
        }
        if (instiDataS.length > 1) {
            institute.appendChild(uldiv);
        }
        institutes.appendChild(institute);
    }
    parentDiv.appendChild(institutes);

}

function generateHomeHTML(dirName) {
    //HomePage
    const introhttp = loadFileAsync(dirName + "homeOld/intro.txt");
    const collaboratorshttp = loadFileAsync(dirName + "homeOld/collaborators.txt");

    homeDiv = document.getElementById("Home");
    introHolder = document.createElement("div");
    introHolder.id = "intro-holder"
    collabHolder = document.createElement("div");
    collabHolder.id = "collaborators-holder"
    homeDiv.appendChild(introHolder);
    homeDiv.appendChild(collabHolder);

    introhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadIntroText(this, introHolder);
        }
    }
    collaboratorshttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadCollaborators(this, collabHolder);
        }
    }
    //set document title
    document.title = "IISc-Microsoft Research Seminar Series"
}