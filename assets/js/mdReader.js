function createSeminarHolders(){

    const upcomingDivHeading = document.createElement("div");
    upcomingDivHeading.className = "home-header";
    upcomingDivHeading.id = "upcoming-seminars-heading"
    upcomingDivHeading.innerHTML = "Upcoming Seminars"
    
    const upcomingDiv = document.createElement("div");
    upcomingDiv.className = "home-text";
    upcomingDiv.id = "upcoming-seminars"

    const pastDivHeading = document.createElement("div");
    pastDivHeading.className = "home-header";
    pastDivHeading.id = "past-seminars-heading"
    pastDivHeading.innerHTML = "Past Seminars"

    const pastDiv = document.createElement("div");
    pastDiv.className = "home-text";
    pastDiv.id = "past-seminars"


    return [upcomingDivHeading,upcomingDiv,pastDivHeading,pastDiv]
}

function emptyTalks(talksDiv){
    talksDiv = document.getElementById("Talks");
    while (talksDiv.hasChildNodes()) {
        talksDiv.removeChild(talksDiv.lastChild);
    }
}


function loadTalks(contentUrl, filesListPath) {
    talksDiv = document.getElementById("Talks");
    emptyTalks(talksDiv)

    const [upcomingDivHeading,upcomingDiv,pastDivHeading,pastDiv] =  createSeminarHolders();


    var upcomingDatesArray = []
    var pastDatesArray = []
    var loc2insert = 0
    dirName = contentUrl + 'seminars/'
    filesListPath = "files.list";
    const filesListHttp = loadFileAsync(dirName + filesListPath);
    filesListHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const filesListRaw = this.responseText.trim();
            const filenames = filesListRaw.split('\n');
            for (let i = 1; i < filenames.length; i++) {
                let talkFile = filenames[i];
                let talkhttp = loadFileAsync(dirName + talkFile);
                //create holders so that it does not go out of place in async
                talkFileName = talkFile.slice(0, -3);


                talkhttp.onreadystatechange = function (talkFileName) {
                    //We need current value of talkFileName, so creating an outer function that returns an inner function
                    innerFunc = function (event) {
                        if (this.readyState === 4 && this.status === 200) {
                            [seminar, seminarDate, seminarName] = createTalk(this.responseText, talkFile, 0);
                            const currTime = new Date();
                            if (seminarDate >= currTime) {
                                talkHolderUpcoming = document.createElement("div");
                                // talkHolderUpcoming.id = talkFileName + "-upcoming"
                                // talkHolderUpcoming.id = seminarDate.getTime() + "-upcoming"
                                talkHolderUpcoming.id = seminarDate.getTime()
                                talkHolderUpcoming.appendChild(seminar);
                                if(upcomingDatesArray.length===0){
                                    insert(seminarDate.getTime(),upcomingDatesArray)
                                    talksDiv.prepend(upcomingDiv);
                                    talksDiv.prepend(upcomingDivHeading);
                                    isUpcomingEmpty = false;
                                    upcomingDiv.appendChild(talkHolderUpcoming);
                                } else {
                                    loc2insert = locationOf(seminarDate.getTime(), upcomingDatesArray)
                                    upcomingDatesArray.splice(loc2insert + 1, 0, seminarDate.getTime());
                                    upcomingDiv.insertBefore(talkHolderUpcoming, upcomingDiv.children[loc2insert+1]);
                                    // insert(seminarDate.getTime(),upcomingDatesArray)
                                    // upcomingDiv.appendChild(talkHolderUpcoming);

                                }


                            } else {
                                talkHolderPast = document.createElement("div");
                                // talkHolderPast.id = talkFileName + "-past"
                                talkHolderUpcoming.id = seminarDate.getTime()
                                talkHolderPast.appendChild(seminar);
                                if(pastDatesArray.length===0){
                                    insert(seminarDate.getTime(),pastDatesArray)
                                    talksDiv.appendChild(pastDivHeading);
                                    talksDiv.appendChild(pastDiv);
                                    isPastEmpty = false
                                    pastDiv.prepend(talkHolderPast);

                                } else {
                                    loc2insert = locationOf(seminarDate.getTime(), pastDatesArray)
                                    pastDatesArray.splice(loc2insert + 1, 0, seminarDate.getTime());
                                    pastDiv.insertBefore(talkHolderPast, pastDiv.children[loc2insert+1]);
                                    // insert(seminarDate.getTime(),pastDatesArray);
                                    // pastDiv.prepend(talkHolderPast);

                                }
                            }
                            //reset Mathjax typesetting
                            MathJax.Hub.Queue(["Typeset", MathJax.Hub, seminar]);
                            setAbstractsforDiv(seminar.getElementsByClassName('seminar-abstract-short')[0]);
                        }
                    }
                    return innerFunc;
                }(talkFileName);
            }
        }

    }


}



function setAbstractsforDiv(abstractdiv) {
    const abstractDone = abstractdiv.parentElement.getElementsByClassName("seminar-abstract-seemore").length;
    if (isOverflown(abstractdiv) && !abstractDone) {
        //create a see less token
        const newdiv = document.createElement("div");
        newdiv.innerHTML = "...See More<i class=\"arrow down\"></i>";
        newdiv.className = "seminar-abstract-seemore"
        newdiv.setAttribute("onClick", "seeMoreAbstract(this.parentElement.getElementsByClassName('seminar-abstract-short')[0])");
        abstractdiv.parentElement.appendChild(newdiv);
    }
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function createTalk(talkContents, talkFile, divLocation) {
    const talkKV = parseContents(talkContents);
    const seminar = document.createElement("div");
    const talkName = talkFile.slice(0, talkFile.indexOf("."))
    seminar.id = talkName
    let seminarDate = new Date();
    seminar.className = "seminar";
    if(divLocation===0){
        seminar.classList.add("seminar-card");
    } else{
        seminar.classList.add("seminar-fullpage");
    }

    const imageHolder = document.createElement("div");
    imageHolder.className = "speaker-image-holder"
    seminar.appendChild(imageHolder);

    const mainDetailsHolder = document.createElement("div");
    mainDetailsHolder.className = "speaker-main-holder"
    seminar.appendChild(mainDetailsHolder);

    const speakerDetailsHolder = document.createElement("div");
    speakerDetailsHolder.className = "speaker-details-holder"
    seminar.appendChild(speakerDetailsHolder);

    if(talkKV.author_image){
        const metadiv = document.createElement("img")
        metadiv.src = talkKV.author_image
        metadiv.className = "speaker-image"
        if(talkKV.author_link){
            const linkdiv = document.createElement("a")
            linkdiv.href = talkKV.author_link
            linkdiv.target = "_blank"
            linkdiv.appendChild(metadiv)
            imageHolder.appendChild(linkdiv)
        } else{
            imageHolder.appendChild(metadiv);
        }
    }

    if (talkKV.title) {
        let metadiv;
        if (divLocation === 0) {
            metadiv = document.createElement("div");

            // metadiv.id = talkName;
            const baseUrl = window.location.origin + window.location.pathname;
            let talkUrl = baseUrl + "?talk=" + talkName;
            metadiv.onclick = function () {
                clickTalk(talkKV.title.valueOf(), talkUrl.valueOf())
            };


        } else {
            metadiv = document.createElement("div");
        }
        metadiv.innerHTML = talkKV.title;
        metadiv.className = "seminar-title"
        mainDetailsHolder.appendChild(metadiv);
    }
    if (talkKV.author) {
        const metadiv = document.createElement("div");
        metadiv.innerHTML = talkKV.author;
        metadiv.className = "seminar-speaker"

        if(talkKV.author_link){
            const linkdiv = document.createElement("a")
            linkdiv.href = talkKV.author_link
            linkdiv.target = "_blank"
            linkdiv.className = "author-link-href"
            linkdiv.appendChild(metadiv)
            mainDetailsHolder.appendChild(linkdiv)
        } else{
            mainDetailsHolder.appendChild(metadiv);
        }
    }
    if (talkKV.date || talkKV.location) {
        const metadivholder = document.createElement("div");
        metadivholder.className = "seminar-dateloc"
        if (talkKV.date) {
            const metadiv = document.createElement("div");
            let dateStartTime = new Date(talkKV.date);
            seminarDate = dateStartTime;
            metadiv.innerHTML = "ICS: "
            if (talkKV.date_end) {
                let dateEndTime = new Date(talkKV.date_end);
                if (dateEndTime.getDate() === dateStartTime.getDate()) {
                    metadiv.innerHTML += dateStartTime.toLocaleString() + '-' + dateEndTime.toLocaleTimeString();
                } else {
                    metadiv.innerHTML += dateStartTime.toLocaleString() + '-' + dateEndTime.toLocaleString();
                }

            } else {
                metadiv.innerHTML += dateStartTime.toLocaleString();
            }
            metadiv.className = "seminar-time"
            metadiv.classList.add("seminar-dateloc-child");

            [talkTitle,talkDesc,talkLocation,talkBegin,talkEnd] = generateItemsForCalendar(talkKV)
            const onClickStr = "downloadCalendar('"+talkTitle+"','"+talkDesc+"','"+
                                talkLocation+"','"+talkBegin+"','"+talkEnd+"')";
            metadiv.setAttribute("onClick", onClickStr)
            metadivholder.appendChild(metadiv);
        }
        if (talkKV.location) {
            const metadiv = document.createElement("div");
            metadiv.innerHTML = talkKV.location;
            metadiv.className = "seminar-location"
            metadiv.classList.add("seminar-dateloc-child");
            metadivholder.appendChild(metadiv);
        }
        mainDetailsHolder.appendChild(metadivholder);
    }
    if (talkKV.article) {
        const metadiv = document.createElement("div");
        metadiv.innerHTML = talkKV.article;
        if (divLocation === 0) {
            metadiv.className = "seminar-abstract-short"
        } else if (divLocation === 1) {
            metadiv.className = "seminar-abstract"
        } else {
            metadiv.className = "seminar-abstract-short"
        }

        metadiv.setAttribute("onClick", "seeMoreAbstract(this)")
        speakerDetailsHolder.appendChild(metadiv);
    }
    if (divLocation === 1) {
        if (talkKV.notes) {
            const metadiv = document.createElement("div");
            metadiv.innerHTML = talkKV.notes;
            metadiv.className = "seminar-notes"
            speakerDetailsHolder.appendChild(metadiv);
        }
        if (talkKV.link_to_paper) {
            const metadiv = document.createElement("div");
            metadiv.innerHTML = talkKV.link_to_paper;
            metadiv.className = "seminar-paper"
            speakerDetailsHolder.appendChild(metadiv);
        }
        if (talkKV.link_to_recording) {
            const metadiv = document.createElement("div");
            metadiv.innerHTML = talkKV.link_to_recording;
            metadiv.className = "seminar-recording"
            speakerDetailsHolder.appendChild(metadiv);
        }
    }
    return [seminar, seminarDate,talkKV.title];


}

function parseContents(contents) {
    //Remove comments from string: https://stackoverflow.com/questions/5989315/regex-for-match-replacing-javascript-comments-both-multiline-and-inline
    contents = contents.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    const contentLines = contents.split("\n");
    const contentKV = {};
    let inMeta = 0;
    let inContent = 0;
    let lineNo = 0;
    let multiline = "";
    let multilineKey = "";
    for (lineNo = 0; lineNo < contentLines.length && !inContent; lineNo++) {
        if (!inMeta && contentLines[lineNo].trim() === "+++") {
            inMeta = 1;
        } else if (inMeta && contentLines[lineNo].trim() === '+++') {
            inContent = 1;
        } else if (inMeta && multiline !== "") {
            multiline = multiline.concat('\n', contentLines[lineNo].trim());
            if (multiline.slice(-3) === "'''") {
                contentKV[multilineKey] = multiline.slice(0, -3);
                multiline = "";
                multilineKey = "";

            }

        } else if (inMeta && multiline === "") {
            keyval = contentLines[lineNo].split(/=(.+)/);
            if (keyval.length > 1) {
                let key = keyval[0].trim();
                let val = keyval[1].trim();
                if (val[0] === "\"") {
                    val = val.slice(1, -1);
                    contentKV[key] = val;
                }
                if (val.length > 3 && (val.slice(0, 3) === "'''")) {
                    multilineKey = key;
                    multiline = val.slice(3).trim();
                    if (multiline.slice(-3) === "'''") {
                        contentKV[multilineKey] = multiline.slice(0, -3)
                        multiline = "";
                        multilineKey = "";
                    }
                }
            }
        }


    }

    contentKV.article = contentLines.slice(lineNo).join('\n');
    return contentKV;


}

function generateItemsForCalendar(talkKV){
    let talkTitle,talkDesc,talkLocation,talkBegin,talkEnd
    if (talkKV.title){
        talkTitle = talkKV.title
    } else {
        talkTitle = "Seminar organized by IISc-MSR"
    }
    if (talkKV.author){
        talkDesc = "Talk by " + talkKV.author + "."
    } else {
        talkDesc = "Details to be announced shortly"
    }
    if (talkKV.location){
        talkLocation = talkKV.location;
        talkDesc = talkDesc + "Link to the talk: " + talkKV.location;
    } else {
        talkLocation = "Indian Institute of Science, Bangalore"
    }
    if (talkKV.date){
        talkBegin = new Date(talkKV.date);
        if(talkKV.date_end){
            talkEnd = new Date(talkKV.date_end);
        } else{
            Date.prototype.addHours = function(h) {
                this.setTime(this.getTime() + (h*60*60*1000));
                return this;
            }

            talkEnd = new Date(talkKV.date_end).addHours(1)
        }
    } else {
        talkBegin = "TBA"
        talkEnd = "TBA"
    }
    return [talkTitle,talkDesc,talkLocation,talkBegin,talkEnd]
}

function downloadCalendar(talkTitle,talkDesc,talkLocation,talkBegin,talkEnd){
    var cal = ics();
    cal.addEvent(talkTitle, talkDesc, talkLocation, talkBegin, talkEnd);
    cal.download();
}


function insert(element, array) {
    array.splice(locationOf(element, array) + 1, 0, element);
    return array;
}

function locationOf(element, array, start, end) {
    start = start || 0;
    end = end || array.length;
    var pivot = parseInt(start + (end - start) / 2, 10);
    if (array[pivot] === element) return pivot;
    if (end - start <= 1)
        return array[pivot] > element ? pivot - 1 : pivot;
    if (array[pivot] < element) {
        return locationOf(element, array, pivot, end);
    } else {
        return locationOf(element, array, start, pivot);
    }
}
// Test:
// var array = [1,2,3,4,5,6,7,8,9];
// var element = 0.5;
// console.log(insert(element, array));