import { departments, states } from '../constants/Constants';

function generateRandomName() {
  const firstNames = ['John', 'Jane', 'David', 'Emma', 'Michael', 'Olivia'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Lee', 'Wilson'];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomDate() {
  const start = new Date(1970, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  const year = randomDate.getFullYear();
  return `${month}/${day}/${year}`;
}

function generateRandomZipCode() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentId = 0;
export default function generateRandomEmployee() {
  return {
    // eslint-disable-next-line no-plusplus
    id: ++currentId,
    firstName: generateRandomName().split(' ')[0],
    lastName: generateRandomName().split(' ')[1],
    dateOfBirth: generateRandomDate(),
    startDate: generateRandomDate(),
    street: 'street',
    city: 'city',
    state: states[Math.floor(Math.random() * states.length)].value,
    zipCode: generateRandomZipCode(),
    department: departments[Math.floor(Math.random() * departments.length)],
  };
}
