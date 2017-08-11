
import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { BreedService } from './shared/breed.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[ BreedService ],
  styleUrls: ['./app.component.css']})

export class AppComponent {
	protected breeds: ['Error getting results'];
	protected searchStr: string;
    protected dog: string;
    protected dataService: CompleterData; 
    protected wishlist = ['Pug'];
    protected empty = false;
    protected existing = false;

	constructor(private completerService: CompleterService, private breedService: BreedService) {
    	this.dataService = completerService.local(this.breed);    
    }

	ngOnInit() {
		this.breedService.getAll().subscribe(b => this.breeds = b);
	}

	add = (event, dog) => {
		if(dog && dog.length > 0){
			event.preventDefault();
			this.empty = false;
			this.existing = false;
			if(this.wishlist.indexOf(dog) > -1){
				this.existing = true;
				console.log("existing");
			}
			else{
				this.wishlist.push(dog);
			}
			if(this.breeds.indexOf(dog) == -1){
		 		console.log("add to breeds")
		 		this.breeds.push(dog)
		 		//this.breedService.create(dog)
		 	}
		 	this.dog = "";   
	 	}
	 	else{
	 		this.empty = true
	 	} 
	}

	remove = (event, dog) => {
		let index = this.wishlist.indexOf(dog);
		this.wishlist.splice(index, 1);
	}

	reset = () => {
		this.empty = false
		this.existing = false;
	}

  protected breeds = ["Airedale",
							"American Cocker Spaniel",
							"American Eskimo",
							"Anatolian Shepherd",
							"Australian Cattle Dog Mix",
							"Australian Kelpie",
							"Basset Hound",
							"Basset Hound Mix",
							"Bernese",
							"Bernese Mountain Dog",
							"Blue Nose Pit",
							"Blue Nose Pitbull",
							"Boston",
							"Boston Terrier",
							"Briard",
							"Brittany",
							"Bully Pit",
							"Cairn",
							"Cattle Dog",
							"Cattle Dog Mix",
							"Chihuahua",
							"Chihuahua Dachshund",
							"Chiweenie",
							"Choc Lab",
							"Cocker Spaniel",
							"Cocker Spaniel Mix",
							"Coton De Tulear",
							"Dachshund",
							"Doberman Pinscher",
							"Dutch Shepherd",
							"English Bull Terrier",
							"English Springer Spaniel",
							"Frenchie",
							"Frenchton",
							"German Shepherd Mix",
							"German Sherpard",
							"Golden Retriever",
							"Golden Retriever Mix",
							"Greyhound Mix",
							"Hound Mix",
							"Husky",
							"Jack Russell",
							"Jack Russell Chihuahua",
							"Kelpie",
							"King Charles",
							"Lab Pit",
							"Lab Pit Mix",
							"Labrador Retriever",
							"Labrador Retriever Mix",
							"Long Haired Chihuahua",
							"Long Haired Dachshund",
							"Maltese Shih Tzu",
							"Maltese Terrier",
							"Min Pin Mix",
							"Mini Poodle",
							"Mini Poodle Mix",
							"Mix Breed",
							"Morkie",
							"Morkiepoo",
							"Old English Sheepdog",
							"Olde English Bulldogge",
							"Pincher",
							"Pit",
							"Pitbull Terrier Mix",
							"Pitsky",
							"Poochon",
							"Poodle",
							"Puppy",
							"Queensland Heeler",
							"Rhodesian Ridgeback Mix",
							"Ridgeback",
							"Schipperke",
							"Schnauzer",
							"Sheltie",
							"Sheltie Mix",
							"Shih Tzu Mix",
							"Shihtzu Maltese",
							"Silver Lab",
							"St Bernard",
							"Staffordshire",
							"Toy Australian Shepherd",
							"Toy Fox Terrier",
							"Weiner Dog",
							"Welsh Corgi",
							"Whippet Mix",
							"White German Shepherd",
							"Yorkie",
							"Yorkie Mix"
]

  
}
