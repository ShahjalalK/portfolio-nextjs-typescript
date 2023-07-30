import { SchemaTypeDefinition } from "sanity";

export const pricingSchema : SchemaTypeDefinition = {
    name : "pricing",
    title : "Priceing",
    type : "document",
    fields : [
        {
            name : "title",
            title : "Pricing Title",
            type : "string"
        },
        {
            name : "price",
            title : "Price",
            type : "number"
        },
        {
            name : "save",
            title : "Save",
            type : "number"
        },
        {
            name : "contentBold",
            title : "Content-Bold",
            type : "string"
        },
        {
            name : "content",
            title : "Content",
            type : "string"
        },
        {
            name : "delevery",
            title : "Delevery Time",
            type : "number"
        },
        {
            name : "rivishion",
            title : "Revesion",
            type : "boolean"
        },
        {
            name : "serviceInclude",
            title : "Service Include",
            type : "array",
            of: [{type: 'string'}]
        },
        {
            name : "gigUrl",
            title : "Gig Url",
            type : "string"
        }

    ]
}