//class CarWindow {
//    open() {
//        //... 
//    }
class CarWindow {
    open() {
        //...
    }
    close() {
        //...
    }
}
class WindowSwitch {
    constructor(window) {
        this.window = window;
        this.isOn = false;
    }
    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        }
        else {
            this.window.open();
            this.isOn = true;
        }
    }
}
//# sourceMappingURL=WindowSwitch.js.map