"use strict";

//WORK IN PROGRESS

//////////////////////////////////////////////////////////
//Meeting objects
//////////////////////////////////////////////////////////

const meetings = [
    {
        link: "https://docs.google.com/presentation/d/1U5RDkDRVb8AV6i9SMeYNh4zvuuUELOumPxrzFnfTyh8/edit?usp=sharing",
        image: "assets/img/meeting3.png",
        title: "June 12 Meeting",
        description: "Summer",
    },
    {
        link: "https://docs.google.com/presentation/d/1U5RDkDRVb8AV6i9SMeYNh4zvuuUELOumPxrzFnfTyh8/edit?usp=sharing",
        image: "assets/img/meeting1.png",
        title: "February 3 Meeting",
        description: "Introductions and Icebreakers",
    },
    {
        link: "",
        image: "assets/img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
    {
        link: "",
        image: "assets/img/meeting3.png",
        title: "December 21 Meeting",
        description: "Study tips and manual due date",
    },
    {
        link: "https://docs.google.com/presentation/d/1U5RDkDRVb8AV6i9SMeYNh4zvuuUELOumPxrzFnfTyh8/edit?usp=sharing",
        image: "assets/img/meeting1.png",
        title: "February 3 Meeting",
        description: "Introductions and Icebreakers",
    },
    {
        link: "",
        image: "assets/img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
    {
        link: "",
        image: "assets/img/meeting3.png",
        title: "December 21 Meeting",
        description: "Study tips and manual due date",
    },
    {
        link: "",
        image: "assets/img/meeting2.png",
        title: "January 6 Meeting",
        description: "State Information",
    },
]



///////////////////////////////////////////////////////////////////////////////
//Displays the meetings on website
///////////////////////////////////////////////////////////////////////////////

const meetingsSlides = document.querySelector(".meetings__slides");

displayMeetings();
function displayMeetings() {
    meetingsSlides.innerHTML = '';
    for (let i = 0; i < meetings.length - 2; i += 3) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i].link}"><img src="${meetings[i].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i].link}"
                    class="disable-select">${meetings[i].title}</a>
                <p>${meetings[i].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 1].link}"><img src="${meetings[i + 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 1].link}"
                    class="disable-select">${meetings[i + 1].title}</a>
                <p>${meetings[i + 1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 2].link}"><img src="${meetings[i + 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 2].link}"
                    class="disable-select">${meetings[i + 2].title}</a>
                <p>${meetings[i + 2].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

    const left = meetings.length % 3;
    console.log(left);
    if (left == 1) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    } else if (left == 2) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 2].link}"><img src="${meetings[meetings.length - 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 2].link}"
                    class="disable-select">${meetings[meetings.length - 2].title}</a>
                <p>${meetings[meetings.length - 2].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

}

/*
`<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[0].link}"><img src="${meetingRow[0].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[0].link}"
                    class="disable-select">${meetingRow[0].title}</a>
                <p>${meetingRow[0].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[1].link}"><img src="${meetingRow[1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[1].link}"
                    class="disable-select">${meetingRow[1].title}</a>
                <p>${meetingRow[1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[2].link}"><img src="${meetingRow[2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[2].link}"
                    class="disable-select">${meetingRow[2].title}</a>
                <p>${meetingRow[2].description}</p>
            </div>
        </div>
    </div>`
*/