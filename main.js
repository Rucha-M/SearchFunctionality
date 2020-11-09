const sub = document.getElementById('sub');
const input = document.getElementById('searchInput');
const searchList = document.getElementById('searchList');

const searchInfo= async searchJson => {
    const response = await fetch('./info.json');
    const info = await response.json()
    let list = info.blogs.filter(infos => {
        const infoReg = new RegExp(`^${searchJson}`,'gi');
        return infos.title.match(infoReg);
    });
    if(searchJson.length == 0) {
        list = [];
        searchList.innerHTML = '';
    }
    outputInfo(list);
};
    const outputInfo = list => {
        if(list.length > 0) {
            const inputValue = list.map(info => `
            <div class="card border-primary mb-3" style=" max-width:18rem; background:#ffff">
            <h3><img src="${info.Image}" style="width:60px; height:60px;"></img>${info.category}</a></h3>
            <p>${info.title} <span class="text-secondary">${info.author}</span></p><br>
            <a href="#">Readmore</a>
        </div></div>`).join('');
            searchList.innerHTML = inputValue;
           
        }
    }
    sub.addEventListener('submit', (e) => {
        e.preventDefault();
        searchInfo(input.value);
    });


    