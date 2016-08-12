class PostalAddress {
}
class ItalyPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address Italy" + this.City;
    }
}
class UKPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address UK" + this.City;
    }
}
class USAPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address USA" + this.City;
    }
}
class AddressWriter {
    PrintPostalAddress(writer) {
        return writer.WriteAddress();
    }
}
var test = new AddressWriter();
test.PrintPostalAddress(new ItalyPostalAddress);
//# sourceMappingURL=PostalAddress.js.map