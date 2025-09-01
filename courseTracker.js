import { LightningElement } from 'lwc';

export default class CourseTracker extends LightningElement {
    courses = [];
    newCourseName;

    handleCourseChange(event) {
        this.newCourseName = event.target.value;
    }

    handleCourseClick() {
        if (this.newCourseName) {
            this.courses = [...this.courses, this.newCourseName];
        }
        this.newCourseName = '';
    }

    get isArray() {
        return this.courses.length > 0;
    }
}
