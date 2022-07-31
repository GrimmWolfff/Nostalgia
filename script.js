// handle GIFs
const examples = Array.prototype.slice.call(document.querySelectorAll('main .example'));

examples.map(ex => {
    ex.querySelector('.top').addEventListener('click', () => {
        if(ex.querySelector('.bottom').style.display === 'none')
            ex.querySelector('.bottom').style.display = 'block';
        else ex.querySelector('.bottom').style.display = 'none';
    })
})

// handle back arrow
const back = document.querySelector("#Layer_1");
back.addEventListener('click', () => location.replace('/'))