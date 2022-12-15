const data = require("./sampledata.js")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLSchema,
} = require('graphql');


const TimeType = new GraphQLObjectType({
    name: 'Time',
    fields: () => ({
        day: { type: GraphQLInt },
        month: { type: GraphQLInt },
        year: { type: GraphQLInt },
    })
});

const EventTimingType = new GraphQLObjectType({
    name: 'EventTimings',
    fields: () => ({
        startTime: { type: TimeType },
        endTime: { type: TimeType }
    })
});

const TeamMemberType = new GraphQLObjectType({
    name: 'TeamLeader',
    fields: () => ({

        name: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        email: { type: GraphQLString },
        position: { type: GraphQLString },
    })
});

const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        eventType: { type: GraphQLString },
        eventLink: { type: GraphQLString },
        memberLimit: { type: GraphQLInt },
        eventTime: { type: EventTimingType },
    })

});

const TeamType = new GraphQLObjectType({
    name:"team",
    fields: () => ({
        uid: { type: GraphQLID },
        name: { type: GraphQLString },
        status: { type: GraphQLString },
        event: {type: EventType},
        teamDescription: { type: GraphQLString },
        requirements: { type: GraphQLString },
        currentTeamMembers: GraphQLList(TeamMemberType),
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        team : {
            type:TeamType,
            args : { id: { type: GraphQLID}},
            resolve(parent , args){
                return data.find(team => team.id === args.id);
            }
        }
    }
});


module.export = new GraphQLSchema({
    query:RootQuery,
})