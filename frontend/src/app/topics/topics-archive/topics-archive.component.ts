import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TopicDiscussionService } from '../topic-discussion.service';
import { TopicWeekSummary } from '../topic.model';

@Component({
  selector: 'app-topics-archive',
  templateUrl: './topics-archive.component.html',
  styleUrls: ['./topics-archive.component.css']
})
export class TopicsArchiveComponent implements OnInit {

  topics: TopicWeekSummary[] = [];
  loading = false;

  constructor(
    private topicDiscussionService: TopicDiscussionService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.topicDiscussionService.getTopicArchive().subscribe({
      next: (topics) => {
        this.topics = topics || [];
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.toastr.error(error?.error?.message || 'Failed to load topic archive');
      }
    });
  }

  trackByTopic(index: number, item: TopicWeekSummary): number {
    return item.id || index;
  }
}
