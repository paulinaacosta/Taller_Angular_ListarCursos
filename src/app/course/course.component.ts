import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: Array<Course>;

  getCourseList() {
    this.courseService.getCourses().subscribe((cs) => {
      this.courses = cs;
    });
  }

  ngOnInit() {
    this.getCourseList();
  }
}
