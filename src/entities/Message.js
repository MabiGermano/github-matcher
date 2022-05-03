import { EntitySchema } from "typeorm";

export const Message = new EntitySchema({
    name: "Message", 
    tableName: "messages", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        content: {
            type: "varchar",
        },
        viewed: {
            type: "boolean"
        }
    },
})
