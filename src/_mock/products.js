import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const assetWrite = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  assetId: faker.string.uuid(),
  assetName: faker.person.fullName(),
  assetStatus: sample(['active', 'banned']),
  createdOn: faker.date.past(),
  lastUpdatedOn: faker.date.future(),
  version: faker.datatype.boolean(),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
