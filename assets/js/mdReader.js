function createSeminarHolders() {

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


    return [upcomingDivHeading, upcomingDiv, pastDivHeading, pastDiv]
}


function createSeminarDivHolders(divTitle, divID) {

    const divHeading = document.createElement("div");
    divHeading.className = "home-header";
    divHeading.id = divID + "-heading"
    divHeading.innerHTML = divTitle

    const divText = document.createElement("div");
    divText.className = "home-text";
    divText.id = divID

    return [divHeading, divText]

}

function emptyTalks(talksDiv) {
    talksDiv = document.getElementById("Talks");
    while (talksDiv.hasChildNodes()) {
        talksDiv.removeChild(talksDiv.lastChild);
    }
}

function createNavDiv2(navTitle,navID,navDivClass,linkHREF){
    navDiv = document.createElement("div");
    navDiv.id = navID
    navDiv.className = navDivClass
    linkDiv = document.createElement("a");
    linkDiv.href = linkHREF
    linkDiv.innerHTML = navTitle
    navDiv.appendChild(linkDiv)
    return navDiv

}

function createNavDiv(navTitle,navID,navDivClass,linkHREF){
    linkDiv = document.createElement("a");
    linkDiv.href = linkHREF
    navDiv = document.createElement("div");
    navDiv.id = navID
    navDiv.className = navDivClass
    navDiv.innerHTML = navTitle
    linkDiv.appendChild(navDiv)
    return linkDiv

}

function createtalkSection(year, holderID, divTitle, textDivID, navTitle) {
    talkSectionMap = new Map();
    talkSectionMap["year"] = year
    talkSectionMap["datesArray"] = []
    talkSectionMap["talkSectionDiv"] = document.createElement("div");
    talkSectionMap["talkSectionDiv"].id = holderID
    const [divHeading, divText] = createSeminarDivHolders(divTitle, textDivID);
    talkSectionMap["talkSectionDiv"].appendChild(divHeading)
    talkSectionMap["talkSectionDiv"].appendChild(divText)


    talkSectionMap["talkSectionNavDiv"] = createNavDiv(navTitle,holderID + "-nav","buttonNav","#" + holderID)
    return talkSectionMap
}


function insertTalk(talksDiv, talksNavDiv, talkSectionsMap, talkSectionName, talkHolderID, divTitle, textDivID, talkSectionYear, yearsSoFar, navTitle) {
    const now = new Date().getTime();
    
    // Create new section if it doesn't exist
    if (!(talkSectionName in talkSectionsMap)) {
        talkSectionsMap[talkSectionName] = createtalkSection(talkSectionYear, talkHolderID, divTitle, textDivID, navTitle);
        yearsSoFar.push(talkSectionYear);
        yearsSoFar.sort().reverse();
        
        const sectionIndex = yearsSoFar.indexOf(talkSectionYear);
        talksDiv.insertBefore(talkSectionsMap[talkSectionName]["talkSectionDiv"], talksDiv.children[sectionIndex]);

        // Create a grouped dropdown for all previous years instead of separate nav buttons
        const currYear = new Date().getFullYear();
        const isPreviousYear = /^\d{4}$/.test(talkSectionName) && talkSectionYear < currYear;

        if (isPreviousYear) {
            // Ensure a single "More past talks" dropdown exists (stored in the map under a reserved key)
            if (!("_morePastNav" in talkSectionsMap)) {
                const morePastWrapper = document.createElement("div");
                morePastWrapper.id = "more-past";
                morePastWrapper.className = "buttonNav nav-dropdown";
                const btn = document.createElement("div");
                btn.className = "nav-dropdown-button";
                btn.innerHTML = "More past talks";
                // accessibility attributes
                btn.setAttribute('role','button');
                btn.setAttribute('tabindex','0');
                btn.setAttribute('aria-expanded','false');

                morePastWrapper.appendChild(btn);
                const content = document.createElement("div");
                content.className = "nav-dropdown-content";
                morePastWrapper.appendChild(content);
                talkSectionsMap["_morePastNav"] = morePastWrapper;
                // Insert the dropdown into the nav at the position where the first previous-year nav would be
                talksNavDiv.insertBefore(morePastWrapper, talksNavDiv.children[sectionIndex]);

                // Toggle open/close on click (and keyboard Enter/Space). Keep open state persistent when clicked.
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const isOpen = morePastWrapper.classList.toggle('open');
                    btn.setAttribute('aria-expanded', isOpen);
                });
                btn.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        btn.click();
                    }
                });

                // Close when clicking outside the dropdown
                document.addEventListener('click', function (evt) {
                    if (!morePastWrapper.contains(evt.target)) {
                        morePastWrapper.classList.remove('open');
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });

                // Close on Escape key
                document.addEventListener('keydown', function (evt) {
                    if (evt.key === 'Escape') {
                        morePastWrapper.classList.remove('open');
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });

                // If a year link inside is clicked, close the dropdown (useful if navigation is handled in-place)
                content.addEventListener('click', function (e) {
                    const a = e.target.closest('a');
                    if (a) {
                        morePastWrapper.classList.remove('open');
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });
            }
            // Insert this year's nav link into the dropdown content in descending order
            const dropdownContent = talkSectionsMap["_morePastNav"].querySelector(".nav-dropdown-content");
            const prevYears = yearsSoFar.filter(y => y < currYear).sort((a,b)=>b-a);
            const prevIndex = prevYears.indexOf(talkSectionYear);
            if (dropdownContent.children.length <= prevIndex) {
                dropdownContent.appendChild(talkSectionsMap[talkSectionName]["talkSectionNavDiv"]);
            } else {
                dropdownContent.insertBefore(talkSectionsMap[talkSectionName]["talkSectionNavDiv"], dropdownContent.children[prevIndex]);
            }
        } else {
            // Default behaviour: top-level nav buttons (upcoming, pastThisYear, future-year upcoming etc.)
            talksNavDiv.insertBefore(talkSectionsMap[talkSectionName]["talkSectionNavDiv"], talksNavDiv.children[sectionIndex]);
        }
    }

    // Insert the talk in the correct order
    const insertionIndex = locationOf(seminarDate.getTime(), talkSectionsMap[talkSectionName]["datesArray"]);
    const section = talkSectionsMap[talkSectionName]["talkSectionDiv"].lastChild;
    
    if (seminarDate.getTime() > now) {
        // Ascending order for future seminars
        talkSectionsMap[talkSectionName]["datesArray"].splice(insertionIndex + 1, 0, seminarDate.getTime());
        section.insertBefore(talkHolderDiv, section.children[insertionIndex + 1]);
    } else {
        // Descending order for past seminars
        talkSectionsMap[talkSectionName]["datesArray"].splice(insertionIndex, 0, seminarDate.getTime());
        section.insertBefore(talkHolderDiv, section.children[insertionIndex]);
    }
}


function loadTalks(contentUrl, filesListPath) {
    talksDiv = document.getElementById("Talks");
    talksNavDiv = document.getElementById("talks-navigation");
    emptyTalks(talksDiv)


    const currTime = new Date();
    const currYear = currTime.getFullYear();
    const talkSections = new Map();
    const yearsSoFar = []


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
                            seminarYear = seminarDate.getFullYear();
                            talkHolderDiv = document.createElement("div");
                            talkHolderDiv.id = seminarDate.getTime()
                            talkHolderDiv.appendChild(seminar);
                            if (seminarDate >= currTime && seminarYear>currYear) {
                                insertTalk(talksDiv, talksNavDiv, talkSections, seminarYear.toString(), "upcoming"+"year-" + seminarYear, "Upcoming Seminars in " + seminarYear, seminarYear + "-upcoming-seminars", seminarYear + 1, yearsSoFar, "Upcoming talks in " + seminarYear)

                            } else if (seminarDate >= currTime && seminarYear == currYear) {
                                insertTalk(talksDiv, talksNavDiv, talkSections, "upcoming", "upcoming", "Upcoming Seminars in " + currYear, "upcoming-seminars", currYear + 1, yearsSoFar, "Upcoming talks")

                            } else if (seminarYear === currYear) {
                                insertTalk(talksDiv, talksNavDiv, talkSections, "pastThisYear", "pastThisYear", "Previous Seminars in " + currYear, "pastThisYear-seminars", currYear, yearsSoFar, "Past talks this year")

                            } else {
                                insertTalk(talksDiv, talksNavDiv, talkSections, seminarYear.toString(), "year-" + seminarYear, "Previous Seminars in " + seminarYear, seminarYear + "-seminars", seminarYear, yearsSoFar, "Past talks from " + seminarYear)
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
    if (divLocation === 0) {
        seminar.classList.add("seminar-card");
    } else {
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

    if (talkKV.author_image) {
        const metadiv = document.createElement("img")
        metadiv.src = talkKV.author_image
        metadiv.className = "speaker-image"
        if (talkKV.author_link) {
            const linkdiv = document.createElement("a")
            linkdiv.href = talkKV.author_link
            linkdiv.target = "_blank"
            linkdiv.appendChild(metadiv)
            imageHolder.appendChild(linkdiv)
        } else {
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

        if (talkKV.author_link) {
            const linkdiv = document.createElement("a")
            linkdiv.href = talkKV.author_link
            linkdiv.target = "_blank"
            linkdiv.className = "author-link-href"
            linkdiv.appendChild(metadiv)
            mainDetailsHolder.appendChild(linkdiv)
        } else {
            mainDetailsHolder.appendChild(metadiv);
        }
    }
    if (talkKV.date || talkKV.location || talkKV.location_link) {
        const metadivholder = document.createElement("div");
        metadivholder.className = "seminar-dateloc"
        if (talkKV.date) {
            const metadiv = document.createElement("div");
            let dateStartTime = new Date(talkKV.date);
            seminarDate = dateStartTime;
            metadiv.innerHTML = "ICS: "
            if (talkKV.date_end) {
                let dateEndTime = new Date(talkKV.date_end);
                // Format for date
                let dateoptionsobj = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                let timeoptionsobj =  {hour: '2-digit', minute:'2-digit'}

                let localesobj = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
                if (dateEndTime.getDate() === dateStartTime.getDate()) {
                    metadiv.innerHTML += dateStartTime.toLocaleString(undefined, dateoptionsobj)+ " "
                    metadiv.innerHTML += dateStartTime.toLocaleTimeString(undefined, timeoptionsobj) + '-'
                    metadiv.innerHTML += dateEndTime.toLocaleTimeString(undefined,timeoptionsobj);
                } else {
                    metadiv.innerHTML += dateStartTime.toLocaleString(undefined, dateoptionsobj)+ " "
                    metadiv.innerHTML += dateStartTime.toLocaleTimeString(undefined,timeoptionsobj) + '-'
                    metadiv.innerHTML += dateEndTime.toLocaleString(undefined, dateoptionsobj)+ " "
                    metadiv.innerHTML += dateEndTime.toLocaleTimeString(undefined,timeoptionsobj)
                }

            } else {
                metadiv.innerHTML += dateStartTime.toLocaleString();
            }
            metadiv.className = "seminar-time"
            metadiv.classList.add("seminar-dateloc-child");

            [talkTitle, talkDesc, talkLocation, talkBegin, talkEnd] = generateItemsForCalendar(talkKV)
            const onClickStr = "downloadCalendar('" + talkTitle + "','" + talkDesc + "','" +
                talkLocation + "','" + talkBegin + "','" + talkEnd + "')";
            metadiv.setAttribute("onClick", onClickStr)
            metadivholder.appendChild(metadiv);
        }
        if (talkKV.location_link) {
            const metadiv = document.createElement("div");
            metadiv.className = "seminar-location"
            metadiv.classList.add("seminar-dateloc-child");
            metadivholder.appendChild(metadiv);
            const linkdiv = document.createElement("a");
            linkdiv.href = talkKV.location_link;
            linkdiv.target = "_blank"
            if (talkKV.location) {
                linkdiv.innerHTML = talkKV.location
            } else {
                linkdiv.innerHTML = "Meeting Link"
            }
            metadiv.appendChild(linkdiv)
        } else if (talkKV.location) {
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
    return [seminar, seminarDate, talkKV.title];


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

function generateItemsForCalendar(talkKV) {
    let talkTitle, talkDesc, talkLocation, talkBegin, talkEnd
    if (talkKV.title) {
        talkTitle = talkKV.title
    } else {
        talkTitle = "Seminar organized by IISc-MSR"
    }
    if (talkKV.author || talkKV.location_link || talkKV.location) {
        if (talkKV.author) {
            talkDesc = "Talk by " + talkKV.author + "."
        } else {
            talkDesc = ""
        }
        if (talkKV.location_link) {
            talkDesc = talkDesc + " Link to the talk: " + talkKV.location_link + ".";
        } else if (talkKV.location) {
            talkDesc = talkDesc + " " + talkKV.location + ".";
        }
    } else {
        talkDesc = "Details to be announced shortly"
    }

    if (talkKV.location) {
        talkLocation = talkKV.location;
    } else {
        talkLocation = "Indian Institute of Science, Bangalore"
    }
    if (talkKV.date) {
        talkBegin = new Date(talkKV.date);
        if (talkKV.date_end) {
            talkEnd = new Date(talkKV.date_end);
        } else {
            Date.prototype.addHours = function (h) {
                this.setTime(this.getTime() + (h * 60 * 60 * 1000));
                return this;
            }

            talkEnd = new Date(talkKV.date_end).addHours(1)
        }
    } else {
        talkBegin = "TBA"
        talkEnd = "TBA"
    }
    return [talkTitle, talkDesc, talkLocation, talkBegin, talkEnd]
}

function downloadCalendar(talkTitle, talkDesc, talkLocation, talkBegin, talkEnd) {
    var cal = ics();
    cal.addEvent(talkTitle, talkDesc, talkLocation, talkBegin, talkEnd);
    cal.download();
}


function insert(element, array) {
    array.splice(locationOf(element, array) + 1, 0, element);
    return array;
}

function insertDescending(element, array) {
    array.splice(locationOf(element, array), 0, element);
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