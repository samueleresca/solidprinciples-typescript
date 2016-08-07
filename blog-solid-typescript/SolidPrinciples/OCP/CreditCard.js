class CreditCard {
    constructor(code, Expiration, MonthlyCost) {
        this.Code = code;
        this.Expiration = Expiration;
        this.MonthlyCost = MonthlyCost;
    }
    getCode() {
        return this.Code;
    }
    getExpiration() {
        return this.Expiration;
    }
    getDiscount() {
        return this.MonthlyCost * 0.02;
    }
}
class GoldCreditCard extends CreditCard {
    getDiscount() {
        return this.MonthlyCost * 0.05;
    }
}
class SilverCreditCard extends CreditCard {
    getDiscount() {
        return this.MonthlyCost * 0.03;
    }
}
//# sourceMappingURL=CreditCard.js.map