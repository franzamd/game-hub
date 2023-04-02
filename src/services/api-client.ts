import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd74548e176e5469fb985ad3614560416',
  },
});
