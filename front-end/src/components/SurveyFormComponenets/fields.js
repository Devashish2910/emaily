import formFieldTextArea from "./formFieldTextArea";
import formFields from "./formFields";

const FIELDS = [{ label: "Title", name: "title", compo: formFields, placeholder: "Need a dashing Title.."},
    { label: "Subject", name: "subject", compo: formFields, placeholder: "It must be an interesting one.."},
    { label: "Recipients", name: "recipients", compo: formFields, placeholder: "Separate each e-mail with comma, E.g- abc@abc.com, 123@abc.com, ..."},
    { label: "Description", name: "description", compo: formFieldTextArea, placeholder: "Write full description.. but keep it understandable.. okay!"},
];

export default FIELDS;