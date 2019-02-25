let getId = x => document.getElementById(x);
getId('bold').addEventListener('click', function () {
    getId('resaltWrapper').classList.toggle('bold');
})
getId('italic').addEventListener('click', function () {
    getId('resaltWrapper').classList.toggle('italic');
})
getId('underline').addEventListener('click', function () {
    getId('resaltWrapper').classList.toggle('underline');
})
getId('lineThrough').addEventListener('click', function () {
    getId('resaltWrapper').classList.toggle('line_through');
})
getId('left').addEventListener('click', function () {
    getId('resaltWrapper').style.textAlign = 'left'
})
getId('right').addEventListener('click', function () {
    getId('resaltWrapper').style.textAlign = 'right'
})
getId('center').addEventListener('click', function () {
    getId('resaltWrapper').style.textAlign = 'center'
})
let faLock = document.getElementsByClassName('fa-lock')
faLock[0].addEventListener('click', function () {
    getId('resaltWrapper').style.blur
    getId('signIn').classList.toggle('hide');
    getId('signIn').style.onfocus

})

//let f1 = document.forms['f1']  не працює
//getId('butSignIn').addEventListener('click', function () { 
//    if (f1.login == 'admin' && f1.password == 'admin') {
//         getId('signIn').classList.toggle('hide');
//    }
//})

getId('butCreatList').addEventListener('click', function () {
    getId('creatList').style.display = 'flex';
    getId('menu').style.display = 'none';
    getId('resaltWrapper').style.display = 'none';
    getId('correctionText').style.display = 'block';
    getId('correctionText').value = getId('resaltWrapper').innerHTML;
})


getId('tableBut').addEventListener('click', function () {
    getId('creatTable').style.display = 'flex';
    getId('correctionText').style.blur;
    getId('creatTable').style.onfocus


})


let cTr = getId('cTr');
let cTd = getId('cTd');
let wTd = getId('wTd');
let hTd = getId('hTd');
let bWdthTd = getId('bWdthTd');
let TypeOfBorder = getId('styleOfBorder');
let colorOfBorder = getId('colorOfBorder');
getId('butCreateTable').addEventListener('click', function () {
    getId('correctionText').value += `<table>`;
    for (let a = 0; a < cTr.value; a++) {
        getId('correctionText').value += `<tr>`
        for (let i = 0; i < cTd.value; i++) {
            getId('correctionText').value += `<td style="width:${wTd.value + `px`}; height:${hTd.value + `px`}; border-width:${bWdthTd.value + `px`};  border-style:${TypeOfBorder.value}; border-color:${colorOfBorder.value}">` + `Text` + ` ` + [i + 1] + `</td>`
        }
        `</tr>`
    }

    getId('creatTable').style.display = 'none'

})

getId('save').addEventListener('click', function () {
    getId('resaltWrapper').innerHTML = getId('correctionText').value;
    getId('menu').style.display = 'flex';
    getId('resaltWrapper').style.display = 'flex';
    getId('correctionText').style.display = 'none';
    getId('creatList').style.display = 'none';
    getId('creatTable').style.display = 'none';
    getId('creatListUl').style.display = 'none';

})

getId('ulBut').addEventListener('click', function () {
    getId('creatListUl').style.display = 'flex';
})

let cLiUl = getId('cLiUl');
let tMarksUl = getId('tMarksUl');
getId('butCreateListUl').addEventListener('click', function () {
    getId('correctionText').value += `<ul>`;
    for (let a = 0; a < cLiUl.value; a++) {
        getId('correctionText').value += `<li style="list-style-type:${tMarksUl.value}">text</li>`;
    }
    getId('correctionText').value += `</ul>`;
    getId('creatListUl').style.display = 'none'
})
getId('olBut').addEventListener('click', function () {
    getId('creatListOl').style.display = 'flex';
})

let cLiOl = getId('cLiOl');
let tMarksOl = getId('tMarksOl');
getId('butCreateListOl').addEventListener('click', function () {
    getId('correctionText').value += `<ol>`;
    for (let a = 0; a < cLiOl.value; a++) {
        getId('correctionText').value += `<li style="list-style-type:${tMarksOl.value}">text</li>`;
    }
    getId('correctionText').value += `</ol>`;
    getId('creatListOl').style.display = 'none'
})


getId('palette').addEventListener('click', function () {
    getId('textColors').classList.toggle('hide');
})

for (let i = 0; i < getId('textColors').children.length; i++) {
    getId('textColors').children[i].addEventListener('click', function () {
        getId('resaltWrapper').style.color = getId('textColors').children[i].style.color;
        getId('textColors').classList.toggle('hide');
    })
}

getId('butFaImg').addEventListener('click', function () {
    getId('faImage').classList.toggle('hide');
})

for (let i = 0; i < getId('bgColors').children.length; i++) {
    getId('bgColors').children[i].addEventListener('click', function () {
        getId('resaltWrapper').style.backgroundColor = getId('bgColors').children[i].style.color;
        getId('faImage').classList.toggle('hide');
    })
}

getId('faImageColors').addEventListener('click', function () {
    getId('faImageColors').style.border = '2px solid grey';
    getId('faImageColors').style.borderBottom = 'none';
    getId('faImageImg').style.border = 'none';
    getId('faImageFiles').style.border = 'none';
    getId('faImageImg').style.borderBottom = '2px solid grey';
    getId('faImageFiles').style.borderBottom = '2px solid grey';

    getId('faImageColors').style.color = '#9999ff';
    getId('faImageImg').style.color = '#404040';
    getId('faImageFiles').style.color = '#404040';

    getId('bgColors').style.display = 'flex';
    getId('bgImg').style.display = 'none';
    getId('bgFiles').style.display = 'none';
})
getId('faImageImg').addEventListener('click', function () {
    getId('faImageImg').style.border = '2px solid grey';
    getId('faImageImg').style.borderBottom = 'none';
    getId('faImageColors').style.border = 'none';
    getId('faImageFiles').style.border = 'none';
    getId('faImageColors').style.borderBottom = '2px solid grey';
    getId('faImageFiles').style.borderBottom = '2px solid grey';

    getId('faImageColors').style.color = '#404040';
    getId('faImageImg').style.color = '#9999ff';
    getId('faImageFiles').style.color = '#404040';

    getId('bgColors').style.display = 'none';
    getId('bgImg').style.display = 'flex';
    getId('bgFiles').style.display = 'none';
})
getId('faImageFiles').addEventListener('click', function () {
    getId('faImageFiles').style.border = '2px solid grey';
    getId('faImageFiles').style.borderBottom = 'none';
    getId('faImageColors').style.border = 'none';
    getId('faImageImg').style.border = 'none';
    getId('faImageColors').style.borderBottom = '2px solid grey';
    getId('faImageImg').style.borderBottom = '2px solid grey';

    getId('faImageColors').style.color = '#404040';
    getId('faImageImg').style.color = '#404040';
    getId('faImageFiles').style.color = '#9999ff';

    getId('bgColors').style.display = 'none';
    getId('bgImg').style.display = 'none';
    getId('bgFiles').style.display = 'block';

})


for (let i = 0; i < getId('bgImg').children.length; i++) {
    getId('bgImg').children[i].addEventListener('click', function () {
        getId('resaltWrapper').style.background = getId('bgImg').children[i].style.background;
        getId('resaltWrapper').style.backgroundRepeat = 'norepeat';
        getId('resaltWrapper').style.backgroundSize = 'cover';
        getId('faImage').classList.toggle('hide');
    })
}

getId('inputFile').onchange = function () {
    getId('resaltWrapper').style.background = `url` + `(` + URL.createObjectURL(event.target.files[0]) + `)`;
    getId('resaltWrapper').style.backgroundRepeat = 'norepeat';
    getId('resaltWrapper').style.backgroundSize = 'cover';
    getId('faImage').classList.toggle('hide');

}

getId('font').addEventListener('click', function(){
    getId('fontFamily').classList.toggle('hide');
    
})



for (let i = 0; i < getId('fontFamily').children.length; i++) {
    getId('fontFamily').children[i].addEventListener('click', function () {
        getId('resaltWrapper').style.fontFamily = getId('fontFamily').children[i].style.fontFamily;
        getId('fontFamily').classList.toggle('hide');
    })
}

getId('size').addEventListener('click', function(){
    getId('fontSize').classList.toggle('hide');
    
})



for (let i = 0; i < getId('fontSize').children.length; i++) {
    getId('fontSize').children[i].addEventListener('click', function () {
        getId('resaltWrapper').style.fontSize = getId('fontSize').children[i].style.fontSize;
        getId('fontSize').classList.toggle('hide');
    })
}








