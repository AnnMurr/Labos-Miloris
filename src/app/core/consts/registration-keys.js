export class RegistrationKeys {
    static specialSymbolsArray = /[!@#$%^&*()[\]{}|\\;:'"<>.,\/?`~=+\-№_]/

    static specialSymbols = "!@#$%^&*()-_+={}[]|\\;:'\"<>.,/?`~№"

    static maxNumberOfLettersName = 20

    static maxNumberOfLettersEmail = 40

    static minNumberOfLettersPasswords = 6

    static token = Math.random() * new Date
}