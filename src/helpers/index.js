export const getQueryString = (params) => {
  let departmentFilterQueryString = '';

  const sanitizedParams = {};
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const concatString = 'department=';
      if (value.length) {
        return (departmentFilterQueryString =
          '&' + concatString + value.join('&' + concatString));
      }
      return;
    }
    if (value !== '' && value !== undefined && value !== null) {
      sanitizedParams[key] = value.toString();
    }
  });

  const queryString = new URLSearchParams(sanitizedParams).toString();

  return queryString + departmentFilterQueryString;
};
