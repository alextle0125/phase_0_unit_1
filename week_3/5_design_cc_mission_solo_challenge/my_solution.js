// This is a solo challenge

// Your mission description:
// Search around town to recruit 5 soldiers. Call each soldier by name to recruit them. Once recruited, raid an army of
// at the ogre camp.
// 

// Pseudocode
// move Tharin near (37, 54)
// make Tharin say something with "Billup" in it
// move Tharin near (57, 69)
// make Tharin say something with "Marcus" in it
// move Tharin near (66, 53)
// make Tharin say something with "Junas" in it
// move Tharin near (79, 61)
// make Tharin say something with "Donovan" in it
// move Tharin near (80, 53)
// make Tharin say something with "Silas" in it
// move Tharin near outside of ogre camp at (54, 27)
// make Tharin say scream with "RAID" in it

// Initial Code
// move = {};
// move.X = 0;
// move.Y = 0;
// say = {};
// say.message = "";
// attack = {};
// attack.groupSize = 5;
// 
// this.move.X = 37;
// this.move.Y = 54;
// this.say.message = "Billup";
// this.move.X = 57;
// this.move.Y = 69;
// this.say.message = "Marcus";
// this.move.X = 66;
// this.move.Y = 53;
// this.say.message = "Junas";
// this.move.X = 79;
// this.move.Y = 61;
// this.say.message = "Donovan";
// this.move.X = 80;
// this.move.Y = 53;
// this.say.message = "Silas";
// this.move X = 54;
// this.move Y = 27;
// this.say.message = "RAID";
// this.attack.groupSize = 5;


// Refactored Code
move.XY = function(x,y){
	this.X = x;
	this.Y = y;
};

this.move.XY(37, 54);
this.say.message = "Billup";
this.move.XY(57, 69);
this.say.message = "Marcus";
this.move.XY(66, 53);
this.say.message = "Junas";
this.move.XY(79, 61);
this.say.message = "Donovan";
this.move.XY(80, 53);
this.say.message = "Silas";
this.move.XY(54, 27);
this.say.message = "RAID";


// Reflection
// Having CodeCombat accessible helped to navigate command functions. My mission is a pretty simple design so most of the
// the requirements have already been addressed in other missions in the CodeCombat campaign. The only problem that I faced
// was whether I wanted to go in deep into the challenge or not. I wasn't really sure of what was required of me to complete
// this challenge. I mainly relied on the CodeCombat campaign missions as a guideline for my mission. I'd like to get more 
// in-depth at programming the whole game, not just the mission requirements of the game. I'd like to actually be creating
// the objects, variables, and functions from scratch. I think this challenge helped to reinforce my coding process, but I
// don't think I gained any real technical knowledge. I'm also uncertain about how the objects and functions operate in the
// game. I think it'd help to see all of the functional variables of the game to see how they all interact. This challenge 
// required some creativity which I liked, but I'm mainly concerned with the technical side of the game as of right now
// I am trying to develop those technical skills to put my creativity into action. I found the challenge to be a bit tedious
// as it was essentially a mock up or redrafting of someone else's pre-programmed code without having the opportunity to look
// under the hood to see how each function is operating or how each object is created.