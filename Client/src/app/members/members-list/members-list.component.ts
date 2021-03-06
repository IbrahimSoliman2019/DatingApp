import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/Member';
import {MembersService} from '../../_services/members.service'

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  Members:Member[]

  constructor(private memberService:MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers(){
    this.memberService.getMembers().subscribe(members=>{
      this.Members = members;
    })
  }

}
