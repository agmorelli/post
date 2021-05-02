import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  formPost: FormGroup;
  idResponse: number;
  send: boolean;
 

  constructor(private _postServices: PostService,
    private fb: FormBuilder,
    public bsModalRef: BsModalRef) {
      
     }

    private _generateId(){
      return  Math.floor(Math.random() * (11 - 1)) + 1;
     }

     savePost() {
       this.send = true;
       let userId = this._generateId(); 

      //  setTimeout(() => {
      //   this.send = false;
      //   this.idResponse = 10;
      //  }, 1200);

      this._postServices.savePost(this.formPost.value.title, this.formPost.value.body, userId)
      .toPromise()
      .then((resp:any)=>{
        this.send = false;
        if(resp.id){

          this.idResponse = resp.id;
        } else{
          this.send = false;
          console.log(resp);
        }
      })
      .catch(error=>{
        this.send = false;
        console.log(error);
        
      });

     }

     ngAfterViewInit(){
       this.idResponse = null;
     }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {

    this.formPost = this.fb.group({

      title: [null,
        [Validators.required]
      ],

      body: [null,
        [Validators.required]
      ],

    })

  }

}
