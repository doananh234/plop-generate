export const convertRequestParams = (type, params, resource) => {
  switch (type) {
    case 'getAll':
      return {
        // set count params to get count of table
        count: 1,
        // record per page
        limit: params.limit,
        skip: params.skip,
        // filter:
        //
        where: params.filter
          ? JSON.stringify({
              ...params.filter,
            })
          : JSON.stringify({}),
      };
    case 'getReference':
      return {
        limit: 1000,
        skip: 0,
        where: JSON.stringify({
          objectId: {
            $in: params,
          },
        }),
      };
    case 'editMulti':
      return {
        requests: params.map(record => {
          const newRecord = record;
          delete newRecord.createdAt;
          delete newRecord.updatedAt;
          return {
            method: 'PUT',
            path: `/Classes/${resource}/${newRecord.id}`,
            body: newRecord,
          };
        }),
      };
    case 'getOne':
      break;
    case 'del':
    case 'update':
    case 'create':
    default:
      return {};
  }
  return {};
};

export const convertResponseData = (type, response) => {
  switch (type) {
    case 'getAll':
      return {
        results: response.results.map(data => ({ ...data, id: data.objectId })),
        count: response.count,
      };
    case 'editMulti':
      return response.map(data => data.success);
    case 'getOne':
    case 'update':
    case 'create':
      return { ...response, id: response.objectId };
    case 'del':
    default:
      return response;
  }
};
