

abstract class PostalAddress {
    Addressee: string;
    Country: string
    PostalCode: string;
    City: string;
    Street: string
    House: number;

    /*
    * @returns Formatted full address
    */
    abstract WriteAddress(): string;
}

class ItalyPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address Italy" + this.City;
    }
}
class UKPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address UK" + this.City;
    }
}
class USAPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address USA" + this.City;
    }
}


class AddressWriter {
    PrintPostalAddress(writer: PostalAddress): string {
        return writer.WriteAddress();
    }
}


var test = new AddressWriter();
test.PrintPostalAddress(new ItalyPostalAddress);