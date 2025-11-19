export const initContactForm = () => {
    const contact_section = document.getElementsByClassName('contact-block')[0];

    const radio_btn_data = [
        {
            'radio_btn_div_classname': 'contact-radio-btn1',
            'radio_btn_img_id': 'contact-radio-btn1-img',
            'radio_btn_img_src': '../images/select_rb.png',
            'radio_btn_text_classname': 'contact-radio-btn1-p',
            'radio_btn_text_content': 'Say hi',
        },

        {
            'radio_btn_div_classname': 'contact-radio-btn2',
            'radio_btn_img_id': 'contact-radio-btn2-img',
            'radio_btn_img_src': '../images/unselect_rb.png',
            'radio_btn_text_classname': 'contact-radio-btn2-p',
            'radio_btn_text_content': 'Get a Quote',
        }
    ];


    const contact_field_data = [
        {
            'field_id': 'field1',
            'field_p_content': 'Name',
            'field_span_content': '',
            'input_field_tag': 'input',
            'input_field_type': 'text',
            'input_field_name': 'name',
            'input_field_id': 'name',
            'input_field_placeholder': 'Name',
            'required': false
        },

        {
            'field_id': 'field2',
            'field_p_content': 'Email*',
            'field_span_content': 'This field is required',
            'input_field_tag': 'input',
            'input_field_type': 'email',
            'input_field_name': 'email',
            'input_field_id': 'email',
            'input_field_placeholder': 'Email',
            'required': true
        },

        {
            'field_id': 'field3',
            'field_p_content': 'Message*',
            'field_span_content': 'This field is required',
            'input_field_tag': 'textarea',
            'input_field_type': '',
            'input_field_name': 'message',
            'input_field_id': 'message',
            'input_field_placeholder': 'Message',
            'required': true
        },
    ];





    const contact_content = document.createElement('div');
    const contact_form = document.createElement('form');
    const contact_radio_btns = document.createElement('div');
    const contact_fields = document.createElement('div');
    const contact_btn = document.createElement('button');

    const contact_section_img = document.createElement('img');



    contact_content.className = "contact-content";
    contact_form.className = "contact-form";
    contact_radio_btns.className = "contact-radio-btns";
    contact_fields.className = "contact-fields";
    contact_section_img.className = "contact-illustration";










    const numOfBtns = 2;
    for(let i=0; i<numOfBtns; i++) {
        let radio_btn = document.createElement('div');
        let radio_btn_img = document.createElement('img');
        let radio_btn_text = document.createElement('p');

        radio_btn.className = radio_btn_data[i]['radio_btn_div_classname'];
        radio_btn_img.id = radio_btn_data[i]['radio_btn_img_id'];
        radio_btn_img.src = radio_btn_data[i]['radio_btn_img_src'];
        radio_btn_text.className = radio_btn_data[i]['radio_btn_text_classname'];
        radio_btn_text.textContent = radio_btn_data[i]['radio_btn_text_content'];


        radio_btn.appendChild(radio_btn_img);
        radio_btn.appendChild(radio_btn_text);

        contact_radio_btns.appendChild(radio_btn);

    }




    contact_field_data.forEach((data, idx) => {
        const field = document.createElement('div');
        field.id = data.field_id;

        const field_div = document.createElement('div');
        const field_div_p = document.createElement('p');
        const field_div_span = document.createElement('span');

        field_div_p.textContent = data.field_p_content;
        field_div_span.textContent = data.field_span_content;

        const input_field = document.createElement(data.input_field_tag.trim());
        input_field.id = data.input_field_id;
        input_field.name = data.input_field_name;
        
        if(data.input_field_tag.trim() === "input") {
            input_field.type = data.input_field_type;
        }
        input_field.placeholder = data.input_field_placeholder;
        input_field.required = data.required;


        field_div.appendChild(field_div_p);
        field_div.appendChild(field_div_span);

        field.appendChild(field_div);
        field.appendChild(input_field);

        contact_fields.appendChild(field);
    });


    contact_btn.textContent = "Send Message";
    contact_btn.type = "submit";
    contact_section_img.src = "../images/contact-Illustration.png";


    contact_form.appendChild(contact_radio_btns);
    contact_form.appendChild(contact_fields);
    contact_form.appendChild(contact_btn);



    contact_content.appendChild(contact_form);


    contact_section.appendChild(contact_content);
    contact_section.appendChild(contact_section_img);

};