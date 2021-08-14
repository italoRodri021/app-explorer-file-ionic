import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  @ViewChild('filepicker') uploader: ElementRef;
  folderContent = [];
  currentFolder = ''
  copyFile = null;

  constructor(
    private route: ActivatedRoute, 
    private alertCtrl: AlertController,
    private previewAnyFile: PreviewAnyFile,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.currentFolder = this.route.snapshot.paramMap.get('folder') || '';
  }

  async writeFile(){

    await Filesystem. writeFile({
      path: 'secrets/text.txt',
      data: "Documento secreto ITalo teste app",
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });

  }

  async readFile(){

    const contents = await Filesystem.readFile({
      path: 'secrets/text.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });

    console.log('secrets', contents);

  }

  async deleteFile(){

    await Filesystem.deleteFile({
      path: 'secrets/text.txt',
      directory: Directory.Documents
    });

  }

  async readFilePath(){

    const contents = await Filesystem.readFile({
      path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
    })

    console.log('data',contents);
  }
  
}
