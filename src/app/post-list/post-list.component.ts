import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})



export class PostListComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() loveIt: number;
	lastUpdate = new Date;

	
  constructor() { }

  ngOnInit() {
  }


  plusLove()
  	{
  		this.loveIt += 1;
  	}

  	moinsLove()
  	{
  		this.loveIt -= 1;
  	}

  getColor(){

  	if (this.loveIt > 0){
  		return 'green';
  	}
  	else if (this.loveIt < 0){
  		return 'red';
  	}


  }

}
