import { TestBed, getTestBed } from "@angular/core/testing";

import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import faker from "faker";

import { CourseService } from "./course.service";
import { Course } from "./course";
import { environment } from "../../environments/environment";

describe("CourseService", () => {
  let injector: TestBed;
  let service: CourseService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "courses.json";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });

    injector = getTestBed();
    service = injector.get(CourseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getCourses() should return 10 records", () => {
    let mockPosts: Course[] = [];

    for (let i = 0; i < 10; i++) {
      let course = new Course(
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.random.number()
      );
      mockPosts.push(course);
    }

    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
