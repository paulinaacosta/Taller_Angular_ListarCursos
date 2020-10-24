import { CourseComponent } from "./course.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import faker from "faker";
import { Course } from "./course";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("CoursesComponent", () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.courses = [
      new Course(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.random.number()
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });
});
