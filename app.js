const top_div = document.querySelector('.--text-wrapper');
const top_texts = document.querySelector('.top-texts');
const sponsosrs_box = document.querySelector('.--sponsors-container');
const cont = document.querySelector('.container');

// const height_div_1 = top_div.clientHeight;
// const height_div_2 = top_texts.clientHeight;
// const height_div_3 = sponsosrs_box.clientHeight;

// // const arr = [height_div_1, height_div_2, height_div_3];

// // arr.forEach(elem => console.log(elem));

// cont.style.setProperty('--top-div-height', height_div_1 + 'px')
// cont.style.setProperty('--top-texts-height', height_div_2 + 'px')
// cont.style.setProperty('--sponsosrs-box-height', height_div_3 + 'px')

window.addEventListener('resize', () => {
    const height_div_1 = top_div.clientHeight;
    const height_div_2 = top_texts.clientHeight;
    const height_div_3 = sponsosrs_box.clientHeight;

    cont.style.setProperty('--top-div-height', height_div_1 + 'px')
    cont.style.setProperty('--top-texts-height', height_div_2 + 'px')
    cont.style.setProperty('--sponsosrs-box-height', height_div_3 + 'px')

    // console.log(`Height: ${height_div_1}px`);
    // console.log(`Height: ${height_div_2}px`);
    // console.log(`Height: ${height_div_3}px`);
});