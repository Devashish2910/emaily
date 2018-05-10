const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails) => {
    const emailList = emails
        .split(",")
        .map(email => email.trim())
        .filter(email => {
            if (email.length) {
                return re.test(email) === false
            }
        });

    if (emailList.length) {
        return `Invalid Emails: ${emailList}`
    }
    return null;

};