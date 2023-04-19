import teachers from './teachers-object.js';



const body = document.querySelector('body');

const teacherSection = document.createElement('section');
teacherSection.className = 'home-only';
let heading = document.createElement('h2');
heading.innerHTML = 'Featured Teachers';
heading.className = 'about2-title';
teacherSection.appendChild(heading);

let hrRed = document.createElement('hr');
hrRed.className = 'hr-red';
teacherSection.appendChild(hrRed);

let teachersContainer = document.createElement('div')
teachersContainer.className = 'teachers-container';

teachers.forEach(e => {
  let teacherContain = document.createElement('div');
  teacherContain.className = 'teacher-contain';

  let image = document.createElement('img');
  image.className = 'teacher-img';
  image.src = e.image;
  teacherContain.appendChild(image);

  let teacherInfo = document.createElement('div')
  teacherInfo.className = 'teacher-info';

  let name = document.createElement('h3');
  name.className = 'teacher-name';
  name.innerHTML = e.name;
  teacherInfo.appendChild(name);

  let title = document.createElement('p');
  title.className = 'teacher-title';
  title.innerHTML = e.title;
  teacherInfo.appendChild(title);

  let hrGrey = document.createElement('hr');
  hrGrey.className = 'hr-grey';
  teacherInfo.appendChild(hrGrey);

  let descr = document.createElement('p');
  descr.className = 'teacher-descr';
  descr.innerHTML = e.description;
  teacherInfo.appendChild(descr);


  teacherContain.appendChild(teacherInfo);
  teachersContainer.appendChild(teacherContain);
});
teacherSection.appendChild(teachersContainer);

body.appendChild(teacherSection);