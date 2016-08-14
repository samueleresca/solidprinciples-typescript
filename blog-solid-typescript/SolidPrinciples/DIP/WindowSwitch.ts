

//class CarWindow {
//    open() {
//        //... 
//    }

//    close() {
//        //...
//    }
////}


//class WindowSwitch {
//    private isOn = false;

//    constructor(private window: CarWindow) {

//    }

//    onPress() {
//        if (this.isOn) {
//            this.window.close();
//            this.isOn = false;
//        } else {
//            this.window.open();
//            this.isOn = true;
//        }
//    }
//}




interface IWindow {
    open();
    close();
}

class CarWindow implements IWindow {
    open() {
        //...
    }

    close() {
        //...
    }
}


class WindowSwitch {
    private isOn = false;

    constructor(private window: IWindow) {

    }

    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        } else {
            this.window.open();
            this.isOn = true;
        }
    }
}