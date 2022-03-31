
const pant = {
    type: "Jeans",
    noPockets: 2,
    color: "Blue",
    pockets: {
        pocket1: ["hankey", { size: "90 ml", isFilled: true }],
        pocket2: ["Mobile", "keys"]
    },
    emptyPockets: function () {
        for (const key in pant.pockets) {
            pant.pockets[key] = [];
        }
    }
}

const app = document.getElementById("app");
app.innerHTML = `
<div>
<h3>${pant.type}</h3>
<ul>
  <li>Number of Pockets: ${pant.noPockets}</li>
  <li>Color: ${pant.color}</li>
  <li> Pockets content: ${pant.pockets.pocket2}</li> 
</ul>
</div>
`

