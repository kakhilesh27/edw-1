export const initServices = () => {
    const cards_section = document.getElementsByClassName("cards-section")[0];


    const content = [
        {
            "l1": "Search engine",
            "l2": "optimization",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c1.svg",
            "href": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            
        },

        {
            "l1": "Pay-per-click",
            "l2": "advertising",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c2.svg",
            "href": "https://corporatefinanceinstitute.com/resources/valuation/pay-per-click-ppc/"
        },

        {
            "l1": "Social Media",
            "l2": "Marketing",
            "link_img_path": "../images/arrow2.png",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c3.svg",
            "href": " https://www.upgrad.com/digital-marketing-and-communication-pgc-mica-lpv1/?utm_source[…]-CG6Y_iaKyjGaLDHrSDbl33nV-2F3PhCbYhE_j8Ro4a26IihoCI9kQAvD_BwE"
        },

        {
            "l1": "Email",
            "l2": "Marketing",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c4.svg",
            "href": " https://mailchimp.com/marketing-glossary/email-marketing/"
        },

        {
            "l1": "Content",
            "l2": "Creation",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c5.png",
            "href": "https://www.conductor.com/academy/content-creation/"
        },

        {
            "l1": "Analytics and",
            "l2": "Tracking",
            "link_img_path": "../images/arrow2.png",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c6.svg",
            "href": "https://marketingplatform.google.com/about/analytics/"
        }


    ]


    for(let idx in content) {
        let card_section = document.createElement('section');
        let card_left = document.createElement('div');
        let heading = document.createElement('div');
        let l1 = document.createElement('div');
        let l2 = document.createElement('div');
        let l3 = document.createElement('div');
        let link = document.createElement('a');
        let link_img = document.createElement('img');
        let link_txt = document.createElement('div');
        let card_right = document.createElement('div');
        let img_right = document.createElement('img');


        let inc_idx = parseInt(idx)+1;
        card_section.className = `card${inc_idx}`;
        card_left.className = "card-left";
        heading.className = "heading";
        l1.className = "label";
        l2.className = "label";
        l3.className = "label";
        link.className = "link";
        card_right.className = "card-right";




        l1.textContent = content[idx]["l1"];
        l2.textContent = content[idx]["l2"];
        link.href = content[idx]["href"];
        link.target = "_blank";
        link_img.src = content[idx]["link_img_path"];
        link_txt.textContent = content[idx]['link_txt'];
        img_right.src = content[idx]["card_right_img_path"];



        card_section.appendChild(card_left);
        card_section.appendChild(card_right);

        card_left.appendChild(heading);
        card_left.appendChild(link);

        card_right.appendChild(img_right);

        heading.appendChild(l1);
        heading.appendChild(l2);
        heading.appendChild(l3);

        link.appendChild(link_img);
        link.appendChild(link_txt);



        cards_section.appendChild(card_section);
    }

};