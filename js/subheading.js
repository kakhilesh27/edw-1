    export const initSubheading = (subheading_data) => {
        
        subheading_data.forEach((data, idx) => {
            const subheading_div = document.getElementsByClassName(data.subheading_div_classname)[0];

            const header_div = document.createElement('div');
            header_div.className = data.header_div_classname;

            for(let i=0; i<3; i++) {
            
                const label_div = document.createElement('div');
                label_div.className = data.label_classname;

                if(i == 0) {
                    const label_h2 = document.createElement('h2');
                    label_h2.className = data.label_h2_classname;
                    label_h2.textContent = data.label_h2_content;
                
                    
                    label_div.appendChild(label_h2);
                }


                
                header_div.appendChild(label_div);
            }

            const subheading_text = document.createElement('div');
            subheading_text.className = data.subheading_text_classname;
            subheading_text.textContent = data.subheading_text_content;



            
            
            subheading_div.appendChild(header_div);
            subheading_div.appendChild(subheading_text);

        });
    };