import { combineReducers } from 'redux';

import about from '../RootComponents/About/About.reducer';
import home from '../RootComponents/Home/Home.reducer';
export default combineReducers({
    about,
    home
});
