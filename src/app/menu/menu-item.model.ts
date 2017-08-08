export class MenuItem {
    constructor(
        public name: string,
        public url: string,
        public subMenu?: MenuItem[]
    ){}
}
