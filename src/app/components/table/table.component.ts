import { Component, ViewChild, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormPostComponent } from '../form-post/form-post.component';
import { CommentsComponent } from '../comments/comments.component';
import { MatPaginator } from '@angular/material';


// @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cPage: number = 1;
  postList = [];
  bsModalRef: BsModalRef;


  constructor( 
    private _postServices: PostService,
     private modalService: BsModalService) { 

  }


  openFormModal() {
    const initialState = {};

    this.bsModalRef = this.modalService.show(FormPostComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.onHidden.subscribe(()=>{
      this._getPost();
      
    })
  }


  openCommentsModal(postId: number) {
    const initialState = {postId: postId};
    this.bsModalRef = this.modalService.show(CommentsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }


  private _getPost(){
    this._postServices.getPost()
    .subscribe((data:any)=>{
      console.log(data);
      
      this.postList = data;
      
    },
    ()=>{
      this.postList =[];
    });
  }


  ngOnInit() {
  this._getPost();
    
  }


}
