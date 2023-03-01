class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

//     createSpaces() {
//         const space = [];
//         for (let i = 0; i < this.rows; i++) { 
//             const row = [];
//             for (let j = 0; j < this.columns; i++) {
//                 const space = new Space(i, j);
//                 row.push(space);
//             }
//             this.spaces.push(row);
//         }
//         return spaces;
//     }

// }

    createSpaces() {
        const spaces = [];
        for (let x = 0; x < this.columns; x++) {
            const columns = [];

            for (let y= 0; y <this.rows; y++) {
                const space = new Space(x, y);
                columns.push(space);
            }
            spaces.push(columns);
        }
        return spaces;
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}