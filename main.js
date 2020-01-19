const elizabeth = {
    name: "Elizabeth Sanger",
    district: "5th Congressional District of Tennessee",
    platformStatements: [
        {
            taxes: "...taxes statement..."
        },
        {
            jobs: "...jobs statement..."
        },
        {
            infrastructure: "... infrastructure statement..."
        },
        {
            healthCare: "...health care statement..."
        },
        {
            crimeAndPunishment: "...crime and punishment statement..."
        }
    ],
    donationForm: "www.elizabethsanger-donatenow.com",
    calendarOfEvents: "www.elizabethsanger-eventscalendar.com",
    biography: "...biography...",
    imageGallery: {
        headshot: "headshot_picture",
        family: "family_picture",
        constituents: "constituents_picture",
    },
    missionStatement: "...mission statement...",
    registerToVote: "www.elizabethsanger-voterregistration.com"
}

const alyssa = {
    name: "Alyssa Nycum",
    isVolunteer: true,
    address: "3912A Nevada Ave Nashville,TN 37209",
    email: "alyssa.nycum@gmail.com",
    phoneNumber: "443-985-6423",
    availability: "Evenings after 5pm and weekends",
    duties: "answering phone calls",
}

const volunteersList = [];

const addVolunteer = function (volunteer) {
    volunteersList.push(volunteer);
}

console.log(elizabeth);
console.log(alyssa);

addVolunteer(alyssa);
console.log(volunteersList);
