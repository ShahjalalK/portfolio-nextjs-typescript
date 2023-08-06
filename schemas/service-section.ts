import { MdMedicalServices } from "react-icons/md";
import { SchemaTypeDefinition } from "sanity";


export const ServiceSectionSchema: SchemaTypeDefinition = {
    name : 'services',
    title : 'Services',
    type : 'document',
    icon : MdMedicalServices,
    fields : [
        {
            name: "serviceImage",
            title : "Service Image",
            type : "image",
            options : {
                hotspot : true
            }

        },
        {
            name : "serviceName",
            title : "Service Name",
            type : "string",
           
        },
        {
            name : "serviceTitle",
            title : "Service Title",
            type : "string",
            
        },
        {
            title: 'Slug',
            name: 'ServicePath',
            type: 'slug',
            options: {
              source: 'serviceName',
              maxLength: 200,
              
            }
          }, 
          {
            title: 'Search Description',
            name: 'searchDescription',
            type: 'text'            
          },     
       
        {
            name : "servicePageName",
            title : "Service Page Add",
            type : "array",
            of : [{
                type : "reference",
                to : [{type : "servicePage"}]
            }]
        },
        {
            name : "orderLenth",
            title : "Order Lenth",
            type : "number",
            
        },
        
        {
            name : "icon",
            title : "Icon",
            type : "string",
           
        },
        {
            name : "orderLink",
            title : "Service Order Link",
            type : "string",
           
        }
       
    ]
}