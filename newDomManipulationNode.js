function createNewElement(elemen, isi) {
    const elementBaru = document.createElement(elemen);
    const isiElement = document.createTextNode(isi);

    elementBaru.append(isiElement);

    return elementBaru;
}

const sectionA = document.getElementById('a');

const testAppend = createNewElement('p', 'Paragraf Baru!');
testAppend.setAttribute('class', 'p4');

sectionA.append(testAppend);

const testPrepend = createNewElement('p', 'Paragraf Baru!');
testPrepend.setAttribute('class', 'p4');

sectionA.prepend(testPrepend);

const sectionB = document.getElementById('b');

const li2 = sectionB.querySelector('ul li:nth-child(2)');

li2.before(createNewElement('li', 'Item Baru'));
li2.after(createNewElement('li', 'Item Baru'));

// li2.remove();
li2.replaceWith(createNewElement('li', 'Item Replace'));
