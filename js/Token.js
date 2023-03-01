class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    drawHTMLToken() {
        const div = document.createElement('div')
        document.getElementById('game-board-underlay').append(div);
        div.setAttribute("id", this.id);
        div.setAttribute("class", "token");
        div.style.backgroundColor = this.owner.color;
    }
}