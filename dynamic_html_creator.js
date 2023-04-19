import teachers from './teachers-object.js';

const body = document.querySelector('body');

const teacherSection = document.createElement('section');
teacherSection.className = 'home-only toggle-selection';
const heading = document.createElement('h2');
heading.innerHTML = 'Featured Teachers';
heading.className = 'about2-title';
teacherSection.appendChild(heading);

const hrRed = document.createElement('hr');
hrRed.className = 'hr-red';
teacherSection.appendChild(hrRed);

const teachersContainer = document.createElement('div');
teachersContainer.className = 'teachers-container';

teachers.forEach((e) => {
  const teacherContain = document.createElement('div');
  teacherContain.className = 'teacher-contain';

  const image = document.createElement('img');
  image.className = 'teacher-img';
  image.src = e.image;
  teacherContain.appendChild(image);

  const teacherInfo = document.createElement('div');
  teacherInfo.className = 'teacher-info';

  const name = document.createElement('h3');
  name.className = 'teacher-name';
  name.innerHTML = e.name;
  teacherInfo.appendChild(name);

  const title = document.createElement('p');
  title.className = 'teacher-title';
  title.innerHTML = e.title;
  teacherInfo.appendChild(title);

  const hrGrey = document.createElement('hr');
  hrGrey.className = 'hr-grey';
  teacherInfo.appendChild(hrGrey);

  const descr = document.createElement('p');
  descr.className = 'teacher-descr';
  descr.innerHTML = e.description;
  teacherInfo.appendChild(descr);

  teacherContain.appendChild(teacherInfo);
  teachersContainer.appendChild(teacherContain);
});
teacherSection.appendChild(teachersContainer);
const footer = document.querySelector('footer');

body.insertBefore(teacherSection, footer);
