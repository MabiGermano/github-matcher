import { EntitySchema } from "typeorm";

export const User = new EntitySchema({
    name: "User", 
    tableName: "users", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        userName: {
            type: "varchar",
        },
        name: {
            type: "varchar"
        },
        bio: {
            type:"text"
        },
        profile_url: {
            type: "varchar"
        },
        urlImage: {
            type: "varchar"
        }
    },
    relations: {
        likedUsers: {
            target: "User",
            type: "many-to-many",
            joinTable: true,
            cascade: true,
        },
        matchedUsers:  {
            target: "User",
            type: "many-to-many",
            joinTable: true,
            cascade: true
        },
        inboxMessages: {
            target: "Message",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        }

    },
})
