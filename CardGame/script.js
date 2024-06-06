let cards=[
	{
		img: "https://i.pinimg.com/originals/5c/a7/17/5ca71785a11789a44f88c5d44071beb7.jpg",
		value: 1,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/originals/5c/a7/17/5ca71785a11789a44f88c5d44071beb7.jpg",
		value: 1,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/736x/17/55/73/175573cde6dcce8e6d6d771e67060294.jpg",
		value: 2,
		status:"closed"
	},

	{
		img: "https://i.pinimg.com/736x/17/55/73/175573cde6dcce8e6d6d771e67060294.jpg",
		value: 2,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/564x/3a/4c/6b/3a4c6be6bb32539673d8d6ace58b7ce7.jpg",
		value:3,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/564x/3a/4c/6b/3a4c6be6bb32539673d8d6ace58b7ce7.jpg",
		value:3,
		status:"closed"
	},
	{
		img: "https://cdn.stackward.com/wp-content/uploads/2017/05/Deadpool-donald-glover-stackward-900x1249.png",
		value:4,
		status:"closed"
	},

	{
		img: "https://cdn.stackward.com/wp-content/uploads/2017/05/Deadpool-donald-glover-stackward-900x1249.png",
		value:4,
		status:"closed"
	},

	{
		img: "https://cutewallpaper.org/21/wolverine-cartoon-pictures/Video-Watch-the-honest-trailer-for-X-Men-Origins-Wolverine-.jpg",
		value:5,
		status:"closed"
	},

	{
		img: "https://cutewallpaper.org/21/wolverine-cartoon-pictures/Video-Watch-the-honest-trailer-for-X-Men-Origins-Wolverine-.jpg",
		value:5,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/originals/6d/9d/d1/6d9dd13372cfaf4eccdcc714170e50c5.jpg",
		value:6,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/originals/6d/9d/d1/6d9dd13372cfaf4eccdcc714170e50c5.jpg",
		value:6,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/originals/8d/0c/ed/8d0ced3105795d00522a54b43bceb68f.jpg",
		value:7,
		status:"closed"
	},
	{
		img: "https://i.pinimg.com/originals/8d/0c/ed/8d0ced3105795d00522a54b43bceb68f.jpg",
		value:7,
		status:"closed"
	},
	
];



for (let i = cards.length - 1; i >= 0; i--) {
	 let card=cards[i];
	 let j=Math.floor(Math.random()*(i+1));
	 cards[i]=cards[j];
	 cards[j]=card;


}

function mover(i) {
	while (true){
		let r=Math.floor(80+Math.random()*175);
		let g=Math.floor(80+Math.random()*175);
		let b=Math.floor(80+Math.random()*175);
	}
	document.getElementById(`cd${i}`).style.boxShadow=`0px 0px 30px rgb(${r},${g},${b})`;
	document.getElementById(`cd${i}`).style.border=`1px solid rgb(${r},${g},${b})`;
}
function mout(i) {
	
	document.getElementById(`cd${i}`).style.boxShadow=`0px 0px 0px rgb(0,0,0)`;
	document.getElementById(`cd${i}`).style.border=`1px solid black`;
}
function showCards(data) {
	let cardString=``;
	
	 data.forEach((card,index)=>{
	 	cardString+=`

	 		<div class="cd" id="cd${index}" style="background-image:url('${card.img}')" onmouseover="mover(${index})" onmouseout="mout(${index})">
	 			<div class="cover ${card.status}" onclick="openCard(${index}) ">

	 			</div>
	 		</div>

	 	`
	 }) ; 

	 document.getElementById('cards').innerHTML=cardString;
}

showCards(cards);

let clckcount=0
let val;
let score=0;
function openCard(index) {
	clckcount++;
	cards[index].status="open";
	showCards(cards);
	
	document.getElementById(`cd${index}`).Events = 'none';
	
	if(clckcount%2===1){
		val=cards[index].value;
	}
	else if(clckcount%2===0){
		if(val===cards[index].value){
			score+=10;
			document.getElementById('sc').innerText=score;
		}
	}

	if(clckcount===cards.length){
		if (score===70) {
			document.getElementById('cards').innerHTML=`

					<div id="final" style="color:rgb(120,120,120); padding-top:30%; font-size:5rem">BinGoo!!!</div>
			`;
		}
		else{
			document.getElementById('cards').innerHTML=`

					<div id="final" style="color:rgb(120,120,120); padding-top:30%; font-size:5rem">Opps You Lose!!</div>
			`;
		}

		
	}

}

