import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //Resize input post
  reSizeStatus(event: any){
    const textarea: any = document.querySelector(".textarea_post");
    textarea.style.height = "63px";
    let scHeight = event.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  }

  //Upload Image preview
  defaultBtnActive(){
    //console.log('hahahahah')
    let defaultBtn = document.getElementById('default-btn') as HTMLInputElement;
    defaultBtn.click()
    this.onSelectFile(defaultBtn)  
  }

  onSelectFile(e: any){
    const wrapper:any = document.querySelector(".wrapper_up_image");
    const fileName:any = document.querySelector(".file-name");
    const cancelBtn:any = document.querySelector("#cancel_up_image svg");
    const img:any = document.querySelector(".image_preview");
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    e.addEventListener('change', () => {
      const file = e.files[0];
      //console.log(file)
      if (file) {
          const reader = new FileReader();
          reader.onload = function () {
              const result = reader.result;
              //console.log(result)
              img.src = result;
              wrapper.classList.add("active");
          }
          cancelBtn.addEventListener("click", function () {
              img.src = "";
              wrapper.classList.remove("active");
          })
          reader.readAsDataURL(file);
      }
      if (e.value) {
          let valueStore = e.value.match(regExp);
          fileName.textContent = valueStore;
      }
    })
  }
  
}
