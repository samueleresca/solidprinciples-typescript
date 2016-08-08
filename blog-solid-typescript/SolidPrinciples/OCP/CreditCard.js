var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CreditCard = (function () {
    function CreditCard(code, Expiration, MonthlyCost) {
        this.Code = code;
        this.Expiration = Expiration;
        this.MonthlyCost = MonthlyCost;
    }
    CreditCard.prototype.getCode = function () {
        return this.Code;
    };
    CreditCard.prototype.getExpiration = function () {
        return this.Expiration;
    };
    CreditCard.prototype.monthlyDiscount = function () {
        return this.MonthlyCost * 0.02;
    };
    return CreditCard;
}());
var GoldCreditCard = (function (_super) {
    __extends(GoldCreditCard, _super);
    function GoldCreditCard() {
        _super.apply(this, arguments);
    }
    GoldCreditCard.prototype.monthlyDiscount = function () {
        return this.MonthlyCost * 0.05;
    };
    return GoldCreditCard;
}(CreditCard));
var SilverCreditCard = (function (_super) {
    __extends(SilverCreditCard, _super);
    function SilverCreditCard() {
        _super.apply(this, arguments);
    }
    SilverCreditCard.prototype.monthlyDiscount = function () {
        return this.MonthlyCost * 0.03;
    };
    return SilverCreditCard;
}(CreditCard));
//# sourceMappingURL=CreditCard.js.map