import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deletePost(id: number) {
    this.albums = this.albums.filter(a => a.id !== id)
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log("deleted album sucessfully")
    })
  }

}