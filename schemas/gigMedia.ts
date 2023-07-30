import { SchemaTypeDefinition } from "sanity";

export const gigMedia : SchemaTypeDefinition ={
        name : "gigMedia",
        title : "Gig Media",
        type : "document",
        fields : [
            {
                name : "mediaImage",
                type : "image",
                title : "Media Image",
                options : {
                    hotspot : true
                },
               
            },
            {
                name : "video",
                title : "Video URL",
                type : "string"
            },
            {
                name : "title",
                title : "Title",
                type : "string"
            }
        ],
        preview : {select : {title : "title", media : "mediaImage"}}
}