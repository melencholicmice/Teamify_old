/* 

    Sample data :-
    {
        uid:"1",
        teamName: "team 1",
        event: {
           name: "event 1",
           eventType: "Hackathron",
           event link: "Link",
           memberLimit: 3,
           eventTime:{
                start: "...",
                end: "...",
           }
        } 
        teamMemberRequirement: "req....",
        status: "status",
        currentTeamMembers : [
            {
                name : "...",
                phoneNumber: "number",
                email : "email",
                position : "Leader"
            },
            {
                name : "...",
                phoneNumber: "number",
                email : "email",
                position : "member"
            }
        ],
    }

*/


const data = [
    {
        uid:"1",
        teamName: "team 1",
        event: {
            name: "event 1",
            eventType: "Hackathron",
            eventLink: "Link",
            memberLimit: 3,
            eventTime: {
                start: "...",
                end: "...",
            }
        },
        teamMemberRequirement: "req....",
        status: "status",
        teamLeaderInfo: {
            name: "...",
            phoneNumber: "number",
            email: "email",
        },
        currentTeamMembers: [],
    },
    {
        uid:"2",
        teamName: "team 1",
        event: {
            name: "event 1",
            eventType: "Hackathron",
            eventLink: "Link",
            memberLimit: 3,
            eventTime: {
                start: "...",
                end: "...",
            }
        },
        teamMemberRequirement: "req....",
        status: "status",
        teamLeaderInfo: {
            name: "...",
            phoneNumber: "number",
            email: "email",
        },
        currentTeamMembers: [],
    },
    {
        uid:"3",
        teamName: "team 1",
        event: {
            name: "event 1",
            eventType: "Hackathron",
            eventLink: "Link",
            memberLimit: 3,
            eventTime: {
                start: "...",
                end: "...",
            }
        },
        teamMemberRequirement: "req....",
        status: "status",
        teamLeaderInfo: {
            name: "...",
            phoneNumber: "number",
            email: "email",
        },
        currentTeamMembers: [],
    },
    {
        uid:"4",
        teamName: "team 1",
        event: {
            name: "event 1",
            eventType: "Hackathron",
            eventLink: "Link",
            memberLimit: 3,
            eventTime: {
                start: "...",
                end: "...",
            }
        },
        teamMemberRequirement: "req....",
        status: "status",
        teamLeaderInfo: {
            name: "...",
            phoneNumber: "number",
            email: "email",
        },
        currentTeamMembers: [],
    },
]

module.exports = data;