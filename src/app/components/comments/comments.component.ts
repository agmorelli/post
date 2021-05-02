import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, AfterViewInit {

  postId: number;
  comments;

  constructor(private _postServices: PostService,
    public bsModalRef: BsModalRef) {

  }


  ngAfterViewInit(): void {

    this._postServices.getComments(this.postId)
      .subscribe((data: any) => {
        this.comments = data;
      },
      ()=>{
        this.comments = [];
      })
  }

  ngOnInit() {
  }


}
