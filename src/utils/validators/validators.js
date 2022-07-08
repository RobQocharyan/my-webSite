export const required = (value) => {
    if(value){
        return undefined;

    }
    return "Field is required";
};

export const MaxLengthCreator = (maxLength)=> (value) => {
    if(value.length>maxLength){
        return `Max Length is ${maxLength} symwols`;

    }
    return undefined;
};

