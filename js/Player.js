class Player {
    constructor(name, id, color, active = false) {
      this.name = name;
      this.id = id;
      this.color = color;
      this.active = active;
      this.tokens = this.createTokens(21);
    }
  
    createTokens(num) {
      const startTokens = [];

      for (let i = 0; i < num; i++) {
        let token = new Token(i, this);
        startTokens.push(token);
      }
      return startTokens;
    }

    get unusedTokens() {
      return this.tokens.filter(token => !token.dropped);
    }

    get activeToken() {
      return this.unusedTokens[0];
    }
  }
  