import One from './one';
import Two from './two';

const routes = [
    { path: '/', component: One, exact : true },
    { path: '/two', component: Two,},
  ];
  
  export default routes;