const form = document.querySelector('form');
const searchInp = document.querySelector('input');
const tvShowList = document.querySelector('ul');

const searchResult = async (value) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);
        for (let i = 0; i < res.data.length; i++) {
            const list = res.data[i];
            const title = list.show.name;
            if (list.show.ended === null) {
                list.show.ended = '';
            }
            const comeOut = list.show.ended
            const score = Math.round(list.score * 100);
            const li = document.createElement('li');
            const img = document.createElement('img');
            const span = document.createElement('span');
            img.src = list.show.image.original;
            span.innerText = `${title}  ${comeOut}  ${score}/100`;
            li.append(img,span)
            tvShowList.append(li);
            console.log(list.show);
        }
        if (tvShowList.childElementCount === 0) {
            tvShowList.innerText = `Your search - ${value} - did not match any documents.`
        }
    } catch (e) {
        console.log('ERROR');
    }
};

const formSubmit = (e) => {
    tvShowList.innerText = '';
    e.preventDefault();
    searchResult(searchInp.value);
};

form.addEventListener('submit', formSubmit);
