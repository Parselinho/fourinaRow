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
        const token = new Token(i, this);
        startTokens.push(token);
      }
      return startTokens;
    }

    get unusedTokens() {
      
    }

    get activeToken() {
    }

  }
  