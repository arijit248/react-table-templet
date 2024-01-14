export const fetchData = async (url, params) => {
  try {
    const response = await fetch(url, params);
    const data = await response.json();
    return { data: data, status: response.status };
  } catch (e) {
    console.log(e);
  }
};
