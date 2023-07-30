import { MdOutlineHistoryEdu } from "react-icons/md";
import { SchemaTypeDefinition } from "sanity";


export const frontEndSkillSectionSchema: SchemaTypeDefinition = {
    name : 'frontEndSkills',
    title : 'Frontend-Skills',
    type : 'document',
    icon : MdOutlineHistoryEdu,
    fields : [
        {
            name : "skillName",
            title : "Skill Name",
            type : "string",
           
        },
        {
            name : "parsent",
            title : "Skill Parsent",
            type : "number",
           
        },
        {
            name : "colorCode",
            title : "Color Code",
            type : "color",
           
        },
       
    ],
    preview : {select : {title : "skillName"}}

}