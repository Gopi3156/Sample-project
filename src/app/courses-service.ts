
// Service don't need any decorator class if we have other services depends on this
// means we can use injectable decorator to pass that into service constructor.


export class CoursesService {

  getCourses() {
    return ['Gopi', 'Krishna', 'Tadivakas'];
  }

}
