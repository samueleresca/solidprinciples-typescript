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
    monthlyDiscount() {
        return this.MonthlyCost * 0.02;
    }
}
class GoldCreditCard extends CreditCard {
    monthlyDiscount() {
        return this.MonthlyCost * 0.05;
    }
}
class SilverCreditCard extends CreditCard {
    monthlyDiscount() {
        return this.MonthlyCost * 0.03;
    }
}
//# sourceMappingURL=CreditCard.js.map