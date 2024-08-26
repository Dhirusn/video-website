import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoDetail } from '../../models/portfolio-item';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.scss'
})
export class VideoDetailComponent implements OnInit {
  videoDetails!: VideoDetail;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['videoDetails']) {
        this.videoDetails = JSON.parse(params['videoDetails']);
      } else {
        // Handle missing videoDetails
        console.error("No video details found in the query parameters.");
      }
    });
  }
}
