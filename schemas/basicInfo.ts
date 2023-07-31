import { BsInfoSquare } from "react-icons/bs";
import { SchemaTypeDefinition } from "sanity";

export const BasicInfoSchema: SchemaTypeDefinition = {
    name : 'basicInfo',
    title : 'Basic Information',
    type : 'document',
    icon : BsInfoSquare,
    fields : [
        {
            name : "name",
            title : "Name",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "myImage",
            title : "My Image",
            type : "image",
            options : {
                hotspot : true
            },
            validation : (Role) => Role.required()
        },
        {
            name : "email",
            title : "Email",
            type : "string",
            
            validation : (Role) => Role.required()
        },
        {
            name : "title",
            title : "Title",
            type : "array",
            of: [{type: 'string'}],
            validation : (Role) => Role.required()
        },
        {
            name : "hireLink",
            title : "Hire Me Link",
            type : "string",
            validation : (Role) => Role.required()
        }
    ]
}