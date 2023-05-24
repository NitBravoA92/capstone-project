function getFeaturesContributorsData() {
  const dataContributors = [
    {
      name: 'Alan Roberts',
      profile: 'Clinical Social Work/Psychologist/Family therapist. PhD at Brock University.',
      about_work: 'He specializes in Anxiety, Depression and Addiction. Alan Utilizes motivational interviewing, cognitive behavioral therapy, narrative framework, and a holistic and humanistic approach.',
      photo_url: './assets/img/contributors/alan-roberts-pic.jpg',
    },
    {
      name: 'Melany Hamilton',
      profile: 'Psychologist, PhD. Professor of Clinical Psychology at University College London',
      about_work: 'She is the founder of the Mind Foundation, the largest community in the field of psychology and neurosciences. She specializes in Depression, Anxiety and Obsessive-Compulsive (OCD).',
      photo_url: './assets/img/contributors/melany-hamilton-pic.jpg',
    },
    {
      name: 'Patrick Stewart',
      profile: 'Trained professional Licensed Mental Health Counselor, MS, LMHC. Professor and Researcher at University of Michigan.',
      about_work: 'He is a specialist in Depression, Anxiety and Anger Management. He has been collaborating for 5 years with the University of Michigan in the study and application of CBT therapy.',
      photo_url: './assets/img/contributors/patrick-stewart-pic.jpg',
    },
    {
      name: 'Rebeca Miller',
      profile: 'Psychologist, PhD at University of Michigan. Researcher in the Department of Psychology at Arizona State University.',
      about_work: 'She specializes in the treatment of children, adolescents, families, couples, and individual adults. She works at the Children\'s Psychiatry Hospital in Detroit providing follow-up studies of boys with ADHD.',
      photo_url: './assets/img/contributors/rebeca-miller-pic.jpg',
    },
    {
      name: 'Mark Woods',
      profile: 'Psychologist, PhD. Otto Weininger Memorial Award Nominee of the Canadian Psychological Association.',
      about_work: 'He is a psychoanalytic/psychodynamic expert with extensive experience in psychoanalytic research at Oxford University and Columbia College. He is a speaker and writer.',
      photo_url: './assets/img/contributors/mark-woods-pic.jpg',
    },
    {
      name: 'Susan Silverman',
      profile: 'Psychologist, Speaker. Professor of Psychoanalysis at Carleton University.',
      about_work: 'She specializes in Depression, Relationship Issues and Borderline Personality (BPD). Over 10 years of experience applying evidence-based treatment and lecturing on depression, anxiety, relationship difficulties, and self-career confusion.',
      photo_url: './assets/img/contributors/susan-silverman-pic.jpg',
    },
  ];
  return dataContributors;
}

function createContributorItem(data) {
  const markupContributor = `
    <div class="contributor box_flex gap_20">
      <div class="contributors-photo">
        <img src="./assets/img/black-checkerboard.jpg" alt="gray checkerboard pattern" class="decorative-pattern">
        <img src="${data.photo_url}" alt="${data.name}" title="${data.name}" class="photo">
      </div>
      <div class="contributors-info">
        <h3 class="name">${data.name}</h3>
        <h4 class="profile">${data.profile}</h4>
        <p class="description">${data.about_work}</p>
      </div>
    </div>
  `;
  return markupContributor;
}

function showContributors(contributors, container) {
  for (let index = 0; index < contributors.length; index += 1) {
    container.innerHTML += createContributorItem(contributors[index]);
  }
}

function buildContributorsSection() {
  const contributorsContainer = document.querySelector('#contributors-items-boxes');
  const dataContributors = getFeaturesContributorsData();
  showContributors(dataContributors, contributorsContainer);
}

buildContributorsSection();