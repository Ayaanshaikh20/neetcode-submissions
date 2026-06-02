class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let normalizedemails = [];
        for(let i=0; i<emails.length; i++) {
            let normalize_email = emails[i].split("@");
            let normalize_local = normalize_email[0].replaceAll(".", "").split("+")[0];
            let joinemail = normalize_local + "@" + normalize_email[1];
            normalizedemails.push(joinemail);
        }
        let unique = new Set(normalizedemails);
        return unique.size
    }
}
