import fetch from 'isomorphic-unfetch';
import shuffle from 'lodash/shuffle';

const fetchAPIData = (url) => {
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
};

export const processAPIData = (apiData) => {
  let fetchData = {};
  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }
  const data = fetchData ? fetchData.data : [];
  return data;
};

export const searchedData = (processedData) => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = shuffle(processedData.slice(0, randNumber));
  return data;
};

export const searchStateKeyCheck = (state) => {
  for (var key in state) {
    if (
      state[key] !== null &&
      state[key] != '' &&
      state[key] != [] &&
      state[key] != 0 &&
      state[key] != 100
    ) {
      return true;
    }
  }
  return false;
};

export const paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

export const getAPIData = async (apiUrl) => {
  const promises = apiUrl.map(async (repo) => {
    const apiPath = `${process.env.SERVER_API}/data`;
    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await fetchAPIData(api);
    return {
      name: repo.name,
      data: response,
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};
