import { PiDotsNineBold } from "react-icons/pi";
import { SchemaTypeDefinition } from "sanity";


export const portfolioSectionSchema: SchemaTypeDefinition = {
    name : 'portfolio',
    title : 'Portfolio',
    type : 'document',
    icon : PiDotsNineBold,
    fields : [
        {
            name : "media",
            title : "Image",
            type : "image",
            options: {
                hotspot: true 
              },
            validation : (Role) => Role.required()
        }, 
        {
            name : "imageHeight",
            title : "h-72",
            type : "boolean"            
        }, 
        {
            name : "title",
            title : "Title",
            type : "string",
            validation : (Role) => Role.required()
        },
             
        {
            name : "className",
            title : "col-span-2",
            type : "boolean"            
        },
        {
            name: 'programName',
            title: 'Program Name',
            type: 'array',
            of: [{type: 'string'}]
          },
          {
            name : "targetLink",
            title : "Link",
            type : "string"            
        }
       
       
    ]
}