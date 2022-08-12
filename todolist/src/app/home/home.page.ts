import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskPage } from '../task/task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = 'tâche';
  Todo : any[] = [];
  elt : string = "";

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TaskPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //remplir l'array Todo
      this.elt = `${data}`;
      let todo = {id:this.Todo.length, name:this.elt};
      this.Todo.push(todo);
    }
  }

  remove(n:number){
    //supprimer des elts de l'array Todo
    
    this.Todo = this.Todo.filter((i => i.id !== n));
  }
}