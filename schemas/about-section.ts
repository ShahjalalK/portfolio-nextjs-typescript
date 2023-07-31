import { MdOutlineDescription } from "react-icons/md";
import { SchemaTypeDefinition } from "sanity";

export const AboutSectionSchema: SchemaTypeDefinition = {
    name : 'about',
    title : 'About',
    type : 'document',
    icon : MdOutlineDescription,
    fields : [
        {
            name : "name",
            title : "Name",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "title",
            title : "Title",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "aboutImage",
            title : "About Image",
            type : "image",
            options : {
                hotspot : true
            },
            validation : (Role) => Role.required()
        },
        {
            name : "uploadCV",
            title : "Upload CV",
            type : "file",
            validation : (Role) => Role.required()
        },
        {
            name : "description",
            title : "Description",
            type : "text",
            validation : (Role) => Role.required()
        },
        {
            name : "phone",
            title : "Phone",
            type : "string",
            validation : (Role) => Role.required()
        },
        
        {
            name : "email",
            title : "Email",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "country",
            title : "Country",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "experience",
            title : "Experience",
            type : "text",
            validation : (Role) => Role.required()
        },
        {
            name : "experienceYears",
            title : "Experience-Years",
            type : "number",
            validation : (Role) => Role.required()
        },
        {
            name : "client",
            title : "Client",
            type : "text",
            validation : (Role) => Role.required()
        },
        {
            name : "clientNumber",
            title : "Client Number",
            type : "number",
            validation : (Role) => Role.required()
        }
    ]
}