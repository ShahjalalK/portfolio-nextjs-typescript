import { AiOutlineHome } from "react-icons/ai";
import { SchemaTypeDefinition } from "sanity";

export const HomeSectionSchema: SchemaTypeDefinition = {
    name : 'home',
    title : 'Home',
    type : 'document',
    icon : AiOutlineHome,
    fields : [
        {
            name : "title",
            title : "Title",
            type : "string",
            validation : (Role) => Role.required()
        },
        {
            name : "subtitle",
            title : "Subtitle",
            type : "string"
        }
        
    ]
}