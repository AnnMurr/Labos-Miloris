export class CheckConditionRegistration {

    static checkWidthIncludes(element, elementCheck) {
        return element.includes(elementCheck)
    }

    static checkWidthMatch(element, elementCheck) {
        return element.match(elementCheck)
    }

    static checkMaxLength(element, elementCheck) {
        return element.length > elementCheck
    }

    static checkMinLength(element, elementCheck) {
        return element.length < elementCheck
    }

    static checEquality(element, elementCheck) {
        return element !== elementCheck
    }
}