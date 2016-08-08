var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PostalAddress = (function () {
    function PostalAddress() {
    }
    return PostalAddress;
}());
var ItalyPostalAddress = (function (_super) {
    __extends(ItalyPostalAddress, _super);
    function ItalyPostalAddress() {
        _super.apply(this, arguments);
    }
    ItalyPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address Italy" + this.City;
    };
    return ItalyPostalAddress;
}(PostalAddress));
var UKPostalAddress = (function (_super) {
    __extends(UKPostalAddress, _super);
    function UKPostalAddress() {
        _super.apply(this, arguments);
    }
    UKPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address UK" + this.City;
    };
    return UKPostalAddress;
}(PostalAddress));
var USAPostalAddress = (function (_super) {
    __extends(USAPostalAddress, _super);
    function USAPostalAddress() {
        _super.apply(this, arguments);
    }
    USAPostalAddress.prototype.WriteAddress = function () {
        return "Formatted Address USA" + this.City;
    };
    return USAPostalAddress;
}(PostalAddress));
var AddressWriter = (function () {
    function AddressWriter() {
    }
    AddressWriter.prototype.PrintPostalAddress = function (writer) {
        return writer.WriteAddress();
    };
    return AddressWriter;
}());
//# sourceMappingURL=PostalAddress.js.map