export const logo =
  "https://img.icons8.com/?size=100&id=vKo2l3w3TPSJ&format=png&color=ffffff";

export const NavMenu = [
  {
    id: 1,
    name: "Dashboard",
    img: "https://img.icons8.com/?size=100&id=I4wZrEpGYajn&format=png&color=ffffff",
    path: "./",
  },
  {
    id: 2,
    name: "Schedule",
    img: "https://img.icons8.com/?size=100&id=7724&format=png&color=ffffff",
    path: "./schedule",
  },
  {
    id: 3,
    name: "Attendance",
    img: "https://img.icons8.com/?size=100&id=vIlfTNnpiQPe&format=png&color=ffffff",
    path: "./attendance",
  },
  {
    id: 4,
    name: "Students",
    img: "https://img.icons8.com/?size=100&id=9542&format=png&color=ffffff",
    path: "./students",
  },
  {
    id: 5,
    name: "Settings",
    img: "https://img.icons8.com/?size=100&id=cjKG0gGVVbhH&format=png&color=ffffff",
    path: "./settings",
  },
];

export const bannerAd = [
  "https://www.shutterstock.com/image-vector/welcome-university-web-banner-design-260nw-1944239116.jpg",
  "https://assets-global.website-files.com/5e6bef9160e290b99b7644b5/65f86b8b28150826d4590e4d_banner.png",
];

export const bin = "https://img.icons8.com/?size=100&id=8329&format=png&color=ff0000";
export const redcross = "https://img.icons8.com/?size=100&id=9433&format=png&color=ff0000";
export const greencheck = "https://img.icons8.com/?size=100&id=7690&format=png&color=006400";

export const schedulesDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const hourCount = Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, '0'));
export const minuteCount = Array.from({ length: 60 }, (_, index) => (index).toString().padStart(2, '0'));

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function createStudent(id, rollNo, name, batch) {
  return {
    id: id,
    rollNo: rollNo,
    name: name,
    batch: batch,
    rpresentCount: 0,
    rabsentCount: 0,
    ppresentCount: 0,
    pabsentCount: 0,
  };
}
export const students = [
  createStudent(101, 1, "Jack Sparrow", "FYDS"),
  createStudent(102, 1, "Jessi", "SYDS"),
  createStudent(103, 2, "John", "FYDS"),
  createStudent(104, 1, "Emily", "TYDS"),
  createStudent(105, 3, "Alex", "FYDS"),
  createStudent(106, 2, "Sophia", "TYDS"),
  createStudent(107, 2, "Michael", "SYDS"),
  createStudent(108, 4, "Olivia", "FYDS"),
  createStudent(109, 3, "William", "TYDS"),
  createStudent(110, 3, "Emma", "SYDS"),
  createStudent(111, 5, "Liam", "FYDS"),
  createStudent(112, 4, "Ava", "TYDS"),
  createStudent(113, 4, "Noah", "SYDS"),
  createStudent(114, 6, "Isabella", "FYDS"),
  createStudent(115, 5, "James", "TYDS"),
];


export const batches = students.reduce((unique, student) => {
  if (!unique.includes(student.batch)) {
    unique.push(student.batch);
  }
  return unique;
}, []);

