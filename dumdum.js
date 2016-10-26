/** Dum dum dum program :)
 @author: Praveena's Gowtham 
 @link: https://github.com/praveenagowtham/ourwedding
*/
(function () {
	var Gowtham = new Person(“Gowtham”),
	    Praveena = new Person(“Praveena”);

	gettingMarried({
		boy: Gowtham,
		girl: Praveena,
		in: V.S.P. Thirumana Mahal, Kallakurichi
		on: “4, 5th Dec, 2016”
		at: “ Dec 4 - Reception: 6 pm onwards; 
			Dec 5 - Wedding: 9:15 AM - 10:15 AM”
    });
	
	function Person(name) {
		this.name = name;
		this.status = “single”; 
    }

	function gettingMarried(args) {
		args.boy.status = args.girl.status = “committed”;
		console.log(“Expecting you with your family in “ + args.in +
				   “ on “ + args.on + “ at “ + args.at + “\n” +
				   “Instead of compile, give your best compliments”);
    }
    
}());	
