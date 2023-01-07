class Group {
    constructor(arg) {
        if (Array.isArray(arg)) {
            this.group = arg;
        }
        else {
            this.group = [...arg];
        }
    }
    add(val) {
        if (!this.group.includes(val)) {
            this.group.push(val);
            return this.group;
        }
        else {
            return this.group;
        }
    }
    delete(val) {
        if (this.group.includes(val)) {
            this.group = this.group.filter((item, index) => index !== this.group.indexOf(val));
            return this.group;
        }
        else {
            return this.group;
        }
    }
    has(val) {
        if (this.group.includes(val)) {
            return true;
        }
        else {
            return false;
        }
    }
}
