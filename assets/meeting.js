"use strict";

//WORK IN PROGRESS

//////////////////////////////////////////////////////////
//Meeting objects
////////////////////////////////////////////////////////

//1) to make a new meeting, look to see if there are any blank meeting objects currently
//    - If there are, fill out the one closest to the top with the respective information
//    - for the picture, save a picture in the img folder and copy the path to the file into the image property
//2) to make a new row for meetings, copy a full meetingRow object (has three meetings) and paste it at the very top. 
//    - make sure any closing bracket has a comma
//    - make all fields blank 

/*
[
    {
        link: "",
        image: "",
        title: "",
        description: "",
    },
    {
        link: "",
        image: "",
        title: "",
        description: "",
    },
    {
        link: "",
        image: "",
        title: "",
        description: "",
    },
],
*/

const meetings = [
    [
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
    ],
    [
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
    ],
]



///////////////////////////////////////////////////////////////////////////////
//Displays the meetings on website
///////////////////////////////////////////////////////////////////////////////

const meetingsSlides = document.querySelector(".meetings__slides");

displayMeetings();
function displayMeetings() {
    meetingsSlides.innerHTML = '';
    meetings.forEach((meetingRow, i) => {
        const html = `<div class="meetings__row">
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
    </div>`;
        meetingsSlides.insertAdjacentHTML("afterbegin", html)
    });
}