export const initNavbar = (frame10_data) => {
    const navbar = document.getElementsByClassName("navbar")[0];

    const frame9 = document.createElement('div');
    const frame9_a = document.createElement('a');
    const frame9_a_img = document.createElement('img');

    const frame10 = document.createElement('div');
    const list_items_count = 6;

    for(let i=0; i<list_items_count; i++) { // es6 method should be used
        let li = document.createElement('li');

        let tag = frame10_data[i]['tag'];
        let li_ele = document.createElement(tag);
        if(tag === 'a') {
            li_ele.href = frame10_data[i]['href'];
        }
        li_ele.textContent = frame10_data[i]['content'];

        li.appendChild(li_ele);
        frame10.appendChild(li);

    }

    const menu = document.createElement('img');





    frame9.className = "frame9";
    frame10.className = "frame10";
    menu.id = "menu";


    frame9_a.href = "/";
    frame9_a_img.src = "../images/Frame 9.png";
    frame9_a_img.alt = "logo";
    menu.src = "../images/menu.png";
    menu.style.width = "36px";
    menu.style.height = "36px";


    frame9_a.appendChild(frame9_a_img);
    frame9.appendChild(frame9_a);

    navbar.appendChild(frame9);
    navbar.appendChild(frame10);
    navbar.appendChild(menu);

};