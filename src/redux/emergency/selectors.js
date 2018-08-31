import { createSelector } from 'reselect';
import _ from 'lodash';

const getRawEmergencies = state => state.rest.Emergency;
const getRawEmergencyTypes = state => state.rest.EmergencyType;

export const getEmergencies = createSelector(
  [getRawEmergencies, getRawEmergencyTypes],
  (emergencies, emergencyTypes) => {
    if (emergencies && emergencies.list && emergencyTypes && emergencyTypes.list) {
      const emergencyTypesObj = _.keyBy(emergencyTypes.list, 'type');
      return emergencies.list.map(data => ({
        ...data,
        emergencyType: emergencyTypesObj[data.emergencyType],
      }));
    }
    return [];
  },
);
