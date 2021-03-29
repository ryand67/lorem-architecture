import axios from 'axios';
const URL = `https://api.unsplash.com/photos?page=1/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`

const obj = {
    getPictures: () => {
        axios.get(URL)
        .then(res => {
            return 'asdf';
        });
    }
}

export default obj;