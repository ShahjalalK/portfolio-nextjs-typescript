import { FaFileSignature } from "react-icons/fa6";
import { SchemaTypeDefinition } from "sanity";

export const servicePageSchema: SchemaTypeDefinition = {
  name: "servicePage",
  title: "ServicePage",
  type: "document",
  icon: FaFileSignature,
  fields: [
    {
      name: "serviceImage",
      title: "Service Image",
      type: "image",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "Gigs",
      title: "Gigs",
      type: "array",
      of : [
        {
          type: "reference",
        to: [{ type: "gigMedia" }],
        }
    ]
    },
    {
        name : "description",
        title : "Description",
        type : "array",
        of : [
          {
            type : "block",
            styles : [
              {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'List-style', value: 'li'},
                {title: 'Space', value: 'p'},
                {title: 'Heighlight', value: 'span'},
            ],
            lists: [
              {title: 'Numbered', value: 'number'},
              {title: 'Bullet', value: 'bullet'}
            ],
            marks: {
              // Only allow these decorators
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Code', value: 'code'},
                
              ],
              // Support annotating text with a reference to an author
             
            }
          }
        ]
    },
    {
        name : "pricingName",
        title : "Priching",
        type : "array",
        of : [{ type : "reference", to : [{type : "pricing"}]}]
    }
  ],
};
