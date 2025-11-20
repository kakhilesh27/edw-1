export const initFooter = () => {
    const footer = document.getElementsByTagName('footer')[0];

    // use json
    const navigation_data = [
        {
            'href': '/#contact-us',
            'content': 'About us'
        },

        {
            'href': '/#services',
            'content': 'Services'
        },

        {
            'href': '/#cases',
            'content': 'Use cases'
        },

        {
            'href': '/#team',
            'content': 'Team'
        },

        {
            'href': '../pages/blog.html',
            'content': 'Blog'
        }
    ];

    
    const social_icons_data = [
        {'src': '../images/f-linkedin.png'},
        {'src': '../images/f-facebook.png'},
        {'src': '../images/f-twitter.png'}
    ];


    const contact_us_info_p_data = [
        "Email: info@positivus.com",
        "Phone: 555-567-8901",
        "Address: 1234 Main St <br/>Moonstone City, Stardust State 12345"
    ];



    const footer_block = document.createElement('section');

    const navigation_contacts = document.createElement('div');

    const f_ele = document.createElement('div');
    const f_ele_a = document.createElement('a');
    const f_ele_a_img = document.createElement('img');
    const f_ele_ul_navigation = document.createElement('ul');
    const f_ele_social_icons = document.createElement('div');

    const frame26 = document.createElement('div');
    const frame26_contact_us = document.createElement('div');
    const contact_us_header = document.createElement('div');
    const contact_us_info = document.createElement('div');

    const frame26_subs_block = document.createElement('div');
    const subs_block_field = document.createElement('div');
    const subs_block_btn = document.createElement('button');
    const subs_block_field_p = document.createElement('p');



    const f_line_text = document.createElement('div');
    const f_line = document.createElement('div');
    const f_text = document.createElement('div');
    const f_text_cp = document.createElement('p');
    const f_text_pp = document.createElement('p');






    footer_block.className = "footer-block";
    navigation_contacts.className = "navigation-contacts";
    f_ele.className = "f-elements";
    f_ele_a_img.className = "f-logo";
    f_ele_ul_navigation.className = "navigation";
    f_ele_social_icons.className = "social-icons";

    frame26.className = "frame26";
    frame26_contact_us.className = 'contact-us';
    contact_us_header.className = 'contact-us-header';
    contact_us_info.className = 'contact-us-info';

    frame26_subs_block.className = 'subs-block';
    subs_block_field.className = 'subs-block-field';
    subs_block_btn.className = 'subs-block-button';

    f_line_text.className = 'f-line-text';
    f_line.className = 'f-line';
    f_text.className = 'f-text';
    f_text_pp.id = 'f-text-pp';



    f_ele_a.href = "#";
    f_ele_a_img.src = "../images/logo-bw.png";




    footer_block.appendChild(navigation_contacts);
    footer_block.appendChild(f_line_text);

    navigation_contacts.appendChild(f_ele);
    navigation_contacts.appendChild(frame26);

    f_ele.appendChild(f_ele_a);
    f_ele.appendChild(f_ele_ul_navigation);
    f_ele.appendChild(f_ele_social_icons);

    f_ele_a.appendChild(f_ele_a_img);


    for(let i=0; i<navigation_data.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');

        a.href = navigation_data[i]['href'];
        a.textContent = navigation_data[i]['content'];

        li.appendChild(a);
        f_ele_ul_navigation.append(li);
    }


    for(let i=0; i<social_icons_data.length; i++) {
        let img = document.createElement('img');
        img.src = social_icons_data[i]['src'];

        f_ele_social_icons.appendChild(img);
    }





    frame26.appendChild(frame26_contact_us);
    frame26_contact_us.appendChild(contact_us_header);
    for(let i=0; i<3; i++) {
        
        const contact_us_header_label = document.createElement('div');
        contact_us_header_label.className = 'contact-us-header-label';
        contact_us_header.appendChild(contact_us_header_label);
        
        if(i == 0) {
            const contact_us_header_label_h4 = document.createElement('h4');
            contact_us_header_label_h4.textContent = "Contact us";
            contact_us_header_label.appendChild(contact_us_header_label_h4);
        }
    }


    frame26_contact_us.appendChild(contact_us_info);
    for(let i=0; i<contact_us_info_p_data.length; i++) {
        const contact_us_info_p = document.createElement('p');
        contact_us_info_p.className = 'contact-us-info-p';

        // console.log(contact_us_info_p_data[i]);
        contact_us_info_p.innerHTML = contact_us_info_p_data[i];

        contact_us_info.appendChild(contact_us_info_p);
    }




    frame26.appendChild(frame26_subs_block);
    frame26_subs_block.appendChild(subs_block_field);
    subs_block_field.appendChild(subs_block_field_p);
    subs_block_field_p.textContent = "Email";

    frame26_subs_block.appendChild(subs_block_btn);
    subs_block_btn.dataset.textFull = "Subscribe to news";
    subs_block_btn.dataset.textShort = "Subscribe";




    f_line_text.appendChild(f_line);
    f_line_text.appendChild(f_text);
    f_text.appendChild(f_text_cp);
    f_text.appendChild(f_text_pp);
    f_text_cp.textContent = "© 2023 Positivus. All Rights Reserved.";
    f_text_pp.textContent = "Privacy Policy";









    footer.appendChild(footer_block);
};