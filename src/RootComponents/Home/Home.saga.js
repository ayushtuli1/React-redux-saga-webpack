import { call, put, select } from 'redux-saga/effects';

import axios from "axios";

/** API call to get data */

function getDataFromHacker(query) {
  return axios.request({
    method: "get",
    url: `https://hn.algolia.com/api/v1/search?query=${query}`,
  });
}
function getCountFromHacker(query) {
  return axios.request({
    method: "get",
    url: `https://hn.algolia.com/api/v1/users/${query}`,
  });
}
function getDataFromWiki(query) {
  return axios.request({
    method: "get",
    url: `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&origin=*`,
  });
}


function* getData(action) {
    yield put({ type: 'loadingData' });
    try {
        console.log(action.data)
        if(action.data.seachEngine==="hacker"){
          let { data } = yield call(getDataFromHacker,action.data.input)
          for(let i=0;i<data.hits.length;i++){
            data.hits[i].submissionCount= yield call(getCountFromHacker,data.hits[i].author)
            yield put({ type: 'loadData', data: data.hits[i] });
            console.log("data.hits[i]",data.hits[i])
         }
        } else{
            let { data } = yield call(getDataFromWiki,action.data.input)
            let temp=[]
             for(let i=0;i<data.length;i++){
              let res = {
                story_url: data[3][i],
                title: data[1][i],
                story_title: data[1][i],
                author: data[1][i],
              };
              temp.push(res);
             }
               yield put({ type: 'loadData',data:temp });
            console.log("wiki data", data);
         }
        
       
        yield put({ type: 'loadingData' });
    } catch (e) {
        console.log(e);
    }
}

export default getData;
