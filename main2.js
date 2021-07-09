window.onload = () => {
    data = {
        name: 'menu',
        type: 'column',
        items: [
            {
                title: 'title 1',
                handler: 'ActionCopy'
            },
            {
                title: 'title 2',
                handler: 'ActionSaveAs'
            },
            {
                title: 'title 3',
                handler: 'ActionExit'
            }
        ]
    };
    
    const actions = {
        ActionCopy: function() {console.log('ActionCopy')},
        ActionSaveAs: function() {console.log('ActionSaveAs')},
        ActionExit: function() {console.log('ActionExit')}
    }
    
    const items = data.items;
    
    function getButton(item) {
        const button = document.createElement('button');
        button.innerText = item.title;
        button.dataset.action = item.handler;
        return button;
    }
    
    function getButtonGroupContainer(type, handler){
        const container = document.createElement('div');
        container.addEventListener('click', handler);
        container.classList.add(type);
        return container;
    }
    
    const container = getButtonGroupContainer(
        data.type,
        (event) => {
            const target = event.target;
            const action = target.dataset.action;
         
            if (action &&  actions[action]) {
                actions[action]();
            }
        }
    )
    
    for(const item of items) {
        const button = getButton(item);
        container.append(button);
    };
    
    document.body.append(container);

    //document.body.onload = addElement;


    
    const body  = document.querySelector('body');
    console.log(body);

    const acnive  = document.querySelector('.column');
    //console.log(column);


    body.addEventListener('contextmenu', event => {
        event.preventDefault();
        console.log('contextmenu');
        document.getElementsByClassName('column')[0].style.visibility = "visible";
        container.style.top = `${event.clientY}px`;
        container.style.left = `${event.clientX}px`;

    }, false);

    body.addEventListener('click', event => {
        if (event.body !== 1) {
            document.getElementsByClassName('column')[0].style.visibility = "hidden";
        }
    }, false);

    container.addEventListener("click", event => {
        event.stopPropagation();
    }, false);

}