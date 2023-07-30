import { FaNoteSticky } from "react-icons/fa6";
import { SchemaTypeDefinition } from "sanity";


export const TestimonialSectionSchema: SchemaTypeDefinition = {
    name : 'testimonial',
    title : 'Testimonial',
    type : 'document',
    icon : FaNoteSticky,
    fields : [
        {
            name : "clientImage",
            title : "Client Image",
            type : "image",
            options : {
                hotspot : true
            },
           
        },
        {
            name : "name",
            title : "Client Name",
            type : "string",
           
        },
        {
            name : "title",
            title : "Title",
            type : "string",
           
        },
       
        {
            name : "companyName",
            title : "Company Name",
            type : "string",
           
        },

        {
            name : "review",
            title : "Client Review",
            type : "text",
           
        },
             
        
    ],
    preview : {select : {title : "name", media : "clientImage"}}

}