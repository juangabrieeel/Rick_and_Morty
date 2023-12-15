import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../service/episode.service';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes;
    });
  }
}
