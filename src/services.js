export class Greeter {
  say(greeting: string, name: string) {
    const capitalized = this._capitalize(greeting);
    return `${capitalized}, ${name}!`
  }

  _capitalize(str: string) {
    if (str) {
      return str.replace(/^(.)/, (c) => c.toUpperCase());
    } else {
      return str;
    }
  }
}

export class NamesList {
    constructor() {
        this.list = ['John'];
    }

    getList() {
        return this.list;
    }

    addName(name: string) {
        this.list.push(name);
    }
}
