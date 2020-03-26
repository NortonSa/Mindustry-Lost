// this is not full definition, so it needs a json obj
const hyperDrill = extendContent(Drill,"10-drill",{

	drawLayer: function(tile){
		//pega a função draelayer e faz com que desenhe a ref de blocks.java;
		Blocks.blastDrill.drawLayer(tile);
		//desenha o retangulo com base nos paramentros passados pelos obj json
		Draw.rect(Core.atlas.find(this.name + "-top2"),tile.drawx(),tile.drawy());		
		
	},
	
});
