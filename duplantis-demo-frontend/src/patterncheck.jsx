export default {

    isValidPsw(s) {
        var pattern = /^(\w){6,20}$/
        return pattern.exec(s)
    },

    isValidName(s) {
        var pattern = /^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/
        return pattern.exec(s)
    },

    isValidStafNo(s) {
        var pattern = /^([0-9]){5,7}$/
        return pattern.exec(s)
    },

    getPswRobustness(s) {
        var strongPattern = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
        var mediumPattern = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
        if (strongPattern.exec(s)) return "strong"
        if (mediumPattern.exec(s)) return "medium"
        return "weak"
    }



}