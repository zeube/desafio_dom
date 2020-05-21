var body = document.getElementsByTagName('body')[0]; // otra opción para llamar al body
// document.querySelector('body').appendChild('div1');//otra opción para llamar al body
body.className = 'bg-light';

var div1 = document.createElement('div');
div1.className = "container";
body.appendChild(div1);


var div2 = document.createElement('div');
div2.className = "py-5 text-center";
div1.appendChild(div2);

var img1 = new Image(72, 72);
img1.className = "d-block mx-auto mb-4";
img1.src = "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
div2.appendChild(img1);
//también podría haber definido las propiedades de la imagen así:
// img1.width = "72";
// img1.hight = "72";
img1.alt = "";

var h2_1 = document.createElement('h2');
var titulo = document.createTextNode('Checkout form');
h2_1.appendChild(titulo);
div2.appendChild(h2_1);

var p_1 = document.createElement('p');
p_1.className = "lead";
var contenido = document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.');
p_1.appendChild(contenido);
div2.appendChild(p_1);

// Vamos a la siguiente parte del formato
var div3 = document.createElement('div');
div3.className = "row";
div1.appendChild(div3);

//columna para carro de compra
var div4 = document.createElement('div');
div4.className = "col-md-4 order-md-2 mb-4";
div3.appendChild(div4);

var h4 = document.createElement('h4');
h4.className = "d-flex justify-content-between align-items-center mb-3";

var span1 = document.createElement('span');
span1.className = "text-muted";

var span2 = document.createElement('span');
span2.className = "badge badge-secondary badge-pill";

titulo = document.createTextNode('Your cart');
span1.appendChild(titulo);
h4.appendChild(span1);

titulo = document.createTextNode('3');
span2.appendChild(titulo);
h4.appendChild(span2);


div4.appendChild(h4);

// se crea lista
var ul1 = document.createElement('ul');
ul1.className = "list-group mb-3";
div4.appendChild(ul1);

//primer elemento de la lista
var li1 = document.createElement('li');
li1.className = "list-group-item d-flex justify-content-between lh-condensed";
ul1.appendChild(li1);


var div5 = document.createElement('div');
li1.appendChild(div5);

var h6_1 = document.createElement('h6');
h6_1.className = "my-0";
titulo = document.createTextNode('Product name');
h6_1.appendChild(titulo);
div5.appendChild(h6_1);

var small1 = document.createElement('small');
small1.className = "text-muted";
titulo = document.createTextNode('Brief description');
small1.appendChild(titulo);
div5.appendChild(small1);

var span3 = document.createElement('span');
span3.className = "text-muted";

titulo = document.createTextNode('$12');
span3.appendChild(titulo);
li1.appendChild(span3);

//segundo elemento de la lista

var li2 = document.createElement('li');
li2.className = "list-group-item d-flex justify-content-between lh-condensed";
ul1.appendChild(li2);

var div6 = document.createElement('div');
li2.appendChild(div6);

var h6_2 = document.createElement('h6');
h6_2.className = "my-0";
titulo = document.createTextNode('Second product');
h6_2.appendChild(titulo);
div6.appendChild(h6_2);

var small2 = document.createElement('small');
small2.className = "text-muted";
titulo = document.createTextNode('Brief description');
small2.appendChild(titulo);
div6.appendChild(small2);

var span4 = document.createElement('span');
span4.className = "text-muted";

titulo = document.createTextNode('$8');
span4.appendChild(titulo);
li2.appendChild(span4);

//tercer elemento de la lista

var li3 = document.createElement('li');
li3.className = "list-group-item d-flex justify-content-between lh-condensed";
ul1.appendChild(li3);

var div7 = document.createElement('div');
li3.appendChild(div7);

var h6_3 = document.createElement('h6');
h6_3.className = "my-0";
titulo = document.createTextNode('Third product');
h6_3.appendChild(titulo);
div7.appendChild(h6_3);

var small3 = document.createElement('small');
small3.className = "text-muted";
titulo = document.createTextNode('Brief description');
small3.appendChild(titulo);
div7.appendChild(small3);

var span5 = document.createElement('span');
span5.className = "text-muted";

titulo = document.createTextNode('$5');
span5.appendChild(titulo);
li3.appendChild(span5);

//cuarto elemento de la lista

var li4 = document.createElement('li');
li4.className = "list-group-item d-flex justify-content-between bg-light";
ul1.appendChild(li4);

var div8 = document.createElement('div');
div8.className = "text-success";
li4.appendChild(div8);

var h6_4 = document.createElement('h6');
h6_4.className = "my-0";
titulo = document.createTextNode('Promo code');
h6_4.appendChild(titulo);
div8.appendChild(h6_4);

var small3 = document.createElement('small');
small3.className = "text-muted";
titulo = document.createTextNode('EXAMPLECODE');
small3.appendChild(titulo);
div8.appendChild(small3);

var span5 = document.createElement('span');
span5.className = "text-muted";

titulo = document.createTextNode('-$5');
span5.appendChild(titulo);
li4.appendChild(span5);

//QUINTO elemento de la lista

var li5 = document.createElement('li');
li5.className = "list-group-item d-flex justify-content-between";
ul1.appendChild(li5);

var span6 = document.createElement('span');
titulo = document.createTextNode('Total (USD)');
span6.appendChild(titulo);
li5.appendChild(span6);

var strong1 = document.createElement('strong');
titulo = document.createTextNode('$20');
strong1.appendChild(titulo);
li5.appendChild(strong1);

// creamos el form promocode

var form1 = document.createElement('form');
form1.className = "card p-2";
div4.appendChild(form1);

var div9 = document.createElement('div');
div9.className = "input-group";
form1.appendChild(div9);

var input1 = document.createElement('input');
input1.setAttribute("type", "text");
// input1.type = "text"; // lo mismo que línea anterior?
input1.className = "form-control";
input1.placeholder = "Promo code";
div9.appendChild(input1);

var div10 = document.createElement('div');
div10.className = "input-group-append";
div9.appendChild(div10);

var button1 = document.createElement('button');
button1.type = "submit";
button1.className = "btn btn-secondary";
titulo = document.createTextNode('Redeem');
button1.appendChild(titulo);
div10.appendChild(button1);


// creamos cuatro funciones para el form del Billing Address
function dosColumnas(id, texto) {
    var div = document.createElement('div');
    div.className = 'col-md-6 mb-3';

    var label = document.createElement('label');
    label.for = id;
    label.appendChild(document.createTextNode(texto));
    div.appendChild(label);

    var input = document.createElement('input');
    input.className = "form-control";
    input.id = id;
    input.placeholder = "";
    input.type = "text";
    input.value = "";
    input.required = true;
    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.className = 'invalid-feedback';
    div2.appendChild(document.createTextNode("Valid "));
    div2.appendChild(document.createTextNode(texto));
    div2.appendChild(document.createTextNode(" is required."));
    div.appendChild(div2);

    return div;
}

function unaColumna(id, clase, eplaceholder, espan1, espan2, texto) {
    var div = document.createElement('div');
    div.className = 'mb-3';

    var label = document.createElement('label');
    label.for = id;
    label.appendChild(document.createTextNode(clase));
    var span1 = document.createElement('span');
    span1.className = 'text-muted';
    span1.appendChild(document.createTextNode(espan1));
    label.appendChild(span1);
    div.appendChild(label);

    var div2 = document.createElement('div');
    div2.className = 'input-group';
    div.appendChild(div2);

    var div3 = document.createElement('div');
    div3.className = 'input-group-prepend';
    div2.appendChild(div3);

    var span2 = document.createElement('span');
    span2.className = 'input-group-text';
    span2.appendChild(document.createTextNode(espan2));
    div3.appendChild(span2);

    var input = document.createElement('input');
    input.className = "form-control";
    input.id = id;
    input.placeholder = eplaceholder;
    input.type = "text";
    input.required = true;
    div2.appendChild(input);

    var div4 = document.createElement('div');
    div4.className = 'invalid-feedback';
    div4.appendChild(document.createTextNode(texto));
    div2.appendChild(div4);

    return div;
}

function tresColumnas() {
    var div = document.createElement('div');
    div.className = 'row';

    //primera columna
    var div2 = document.createElement('div');
    div2.className = 'col-md-5 mb-3';

    var label1 = document.createElement('label');
    label1.for = 'country';
    label1.appendChild(document.createTextNode('Country'));
    div2.appendChild(label1);

    var select1 = document.createElement('select');
    select1.className = 'custom-select d-block w-100';
    select1.id = 'country';
    select1.required = true;
    div2.appendChild(select1);

    var option1 = document.createElement('option');
    option1.value = '';
    option1.appendChild(document.createTextNode('Choose...'));
    select1.appendChild(option1);

    var option2 = document.createElement('option');
    option2.appendChild(document.createTextNode('United States'));
    select1.appendChild(option2);

    //segunda columna
    var div3 = document.createElement('div');
    div3.className = 'col-md-4 mb-3';

    var label2 = document.createElement('label');
    label2.for = 'state';
    label2.appendChild(document.createTextNode('State'));
    div3.appendChild(label2);

    var select2 = document.createElement('select');
    select2.className = 'custom-select d-block w-100';
    select2.id = 'state';
    select2.required = true;
    div3.appendChild(select2);

    var option3 = document.createElement('option');
    option3.value = '';
    option3.appendChild(document.createTextNode('Choose...'));
    select2.appendChild(option3);

    var option4 = document.createElement('option');
    option4.appendChild(document.createTextNode('California'));
    select2.appendChild(option4);

    //tercera columna
    var div4 = document.createElement('div');
    div4.className = 'col-md-3 mb-3';

    var label3 = document.createElement('label');
    label3.for = 'zip';
    label3.appendChild(document.createTextNode('Zip'));
    div4.appendChild(label3);

    var input = document.createElement('input');
    input.className = "form-control";
    input.id = 'zip';
    input.placeholder = '';
    input.type = "text";
    input.required = true;
    div4.appendChild(input);

    var div5 = document.createElement('div');
    div5.className = 'invalid-feedback';
    div5.appendChild(document.createTextNode('Zip code required.'));
    div4.appendChild(div5);

    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);

    return div;
}

function checkbox(id, texto) {
    var div = document.createElement('div');
    div.className = 'custom-control custom-checkbox';

    var input = document.createElement('input');
    input.className = "custom-control-input";
    input.id = id;
    div.appendChild(input);

    var label = document.createElement('label');
    label.className = 'custom-control-label';
    label.for = id;
    label.appendChild(document.createTextNode(texto));
    div.appendChild(label);

    return div;
}



function form() {
    var form = document.createElement('form');
    form.className = 'needs-validation';
    form.novalidate = true;


    var div = document.createElement('div');
    div.className = 'row';
    div.appendChild(dosColumnas('firstName', 'first name'));
    div.appendChild(dosColumnas('lastName', 'last name'));
    form.appendChild(div);

    form.appendChild(unaColumna('username', 'Username', 'username', '', '@', 'Your username is required.'));
    form.appendChild(unaColumna('email', 'Email ', 'you@example.com', '(Optional)', '', 'Please enter a valid email address for shipping updates.'))
    form.appendChild(unaColumna('address', 'Address ', '1234 Main St', '(Optional)', '', 'Please enter your shipping address.'))
    form.appendChild(unaColumna('address2', 'Address 2 ', 'Apartment or suite', '(Optional)', '', 'Please enter your shipping address.'))

    form.appendChild(tresColumnas());

    //agregamos linea que separa
    var hr = document.createElement('hr');
    hr.className = "mb-4";
    form.appendChild(hr);

    form.appendChild(checkbox('same-address', 'Shipping address is the same as my billing address'));
    form.appendChild(checkbox('save-info', 'Save this information for next time'));

    //agregamos linea que separa
    var hr2 = document.createElement('hr');
    hr2.className = "mb-4";
    form.appendChild(hr2);

    var div1 = document.createElement('div');
    div1.className = "d-block my-3";
    // div.appendChild(radio_botton());
    div1.appendChild(radio_botton('credit', 'Credit card', 'true'));
    div1.appendChild(radio_botton('debit', 'Debit card', 'false'));
    div1.appendChild(radio_botton('paypal', 'PayPal', 'false'));
    form.appendChild(div1);

    var div2 = document.createElement('div');
    div2.className = "row";
    div2.appendChild(colPay('cc-name', 'Name on card', 'Full name as displayed on card', 'Name on card is required'));
    div2.appendChild(colPay('cc-number', 'Credit card number', '', 'Credit card number is required'));
    form.appendChild(div2);

    var div3 = document.createElement('div');
    div3.className = "row";
    div3.appendChild(colPay2('cc-expiration', 'Expiration', 'Expiration date required'));
    div3.appendChild(colPay2('cc-cvv', 'CVV', 'Security code required'));
    form.appendChild(div3);

    //agregamos linea que separa
    var hr = document.createElement('hr');
    hr.className = "mb-4";
    div.appendChild(hr);

    var button = document.createElement('button');
    button.className = 'btn btn-primary btn-lg btn-block';
    button.type = 'submit';
    button.appendChild(document.createTextNode('Continue to checkout'));
    form.appendChild(button);


    return form;
}





// creando el Payment Method con funciones

function radio_botton(id, texto, boolean) {
    var div = document.createElement('div');
    div.className = "custom-control custom-radio";
    var input = document.createElement('input');
    input.className = "custom-control-input";
    input.id = id;
    input.name = "paymentMethod";
    input.type = "radio";
    input.required = true;
    input.checked = boolean;


    div.appendChild(input);
    var label = document.createElement('label');
    label.className = "custom-control-label";
    label.for = id;
    label.appendChild(document.createTextNode(texto));
    div.appendChild(label);

    return div;
}

function colPay(id, texto, texto2, texto3) {
    var div = document.createElement('div');
    div.className = "col-md-6 mb-3";

    var label = document.createElement('label');
    label.for = id;
    label.appendChild(document.createTextNode(texto));
    div.appendChild(label);


    var input = document.createElement('input');
    input.className = "form-control";
    input.id = id;
    input.placeholder = "";
    input.type = "text";
    input.required = true;
    div.appendChild(input);

    var small = document.createElement('small');
    small.className = 'text-muted';
    small.appendChild(document.createTextNode(texto2));

    var div2 = document.createElement('div');
    div2.className = 'invalid-feedback';
    div2.appendChild(document.createTextNode(texto3));
    div.appendChild(div2);



    return div;
}

function colPay2(id, texto, texto2) {
    var div = document.createElement('div');
    div.className = "col-md-3 mb-3";

    var label = document.createElement('label');
    label.for = id;
    label.appendChild(document.createTextNode(texto));
    div.appendChild(label);

    var input = document.createElement('input');
    input.className = "form-control";
    input.id = id;
    input.placeholder = "";
    input.type = "text";
    input.required = true;
    div.appendChild(input);

    var div2 = document.createElement('div');
    div2.className = 'invalid-feedback';
    div2.appendChild(document.createTextNode(texto2));
    div.appendChild(div2);



    return div;
}

function payment() {
    // var div = document.createElement('div');
    // div.className = "d-block my-3";
    // // div.appendChild(radio_botton());
    // div.appendChild(radio_botton('credit', 'Credit card'));
    // div.appendChild(radio_botton('debit', 'Debit card'));
    // div.appendChild(radio_botton('paypal', 'PayPal'));

    // var div2 = document.createElement('div');
    // div2.className = "row";
    // div2.appendChild(colPay('cc-name', 'Name on card', 'Full name as displayed on card', 'Name on card is required'));
    // div2.appendChild(colPay('cc-number', 'Credit card number', '', 'Credit card number is required'));
    // div.appendChild(div2);

    // var div3 = document.createElement('div');
    // div3.className = "row";
    // div3.appendChild(colPay2('cc-expiration', 'Expiration', 'Expiration date required'));
    // div3.appendChild(colPay2('cc-cvv', 'CVV', 'Security code required'));
    // div.appendChild(div3);

    // //agregamos linea que separa
    // var hr = document.createElement('hr');
    // hr.className = "mb-4";
    // div.appendChild(hr);

    // var button = document.createElement('button');
    // button.className = 'btn btn-primary btn-lg btn-block';
    // button.type = 'submit';
    // button.appendChild(document.createTextNode('Continue to checkout'));
    // div.appendChild(button);

    return div;
}

// creando el Billing Adddress y payment esta vez con funciones
function billingAddress() {
    var div = document.createElement('div');
    div.className = 'col-md-8 order-md-1';
    var h4a = document.createElement('h4');
    h4a.className = 'mb-3';
    h4a.appendChild(document.createTextNode('Billing address'));
    div.appendChild(h4a);
    div.appendChild(form());

    // //agregamos el payment
    // var h4b = document.createElement('h4');
    // h4b.className = "mb-3";
    // h4b.appendChild(document.createTextNode('Payment'));
    // div.appendChild(h4b);
    // div.appendChild(payment());

    return div;
}
//cargamos el billing address en el codigo html
div3.appendChild(billingAddress());





// creando el footer

// una funcioón para el inline list
function inline_list(texto, url) {
    li = document.createElement('li');
    li.className = "list-inline-item";
    a = document.createElement('a');
    a.appendChild(document.createTextNode(texto));
    a.href = url;
    li.appendChild(a);

    return li;
}

function footer() {
    footer = document.createElement('footer');
    footer.className = "my-5 pt-5 text-muted text-center text-small";
    p = document.createElement('p');
    p.className = "mb-1";
    p.appendChild(document.createTextNode('2017-2019 Company Name')); // le paso al tiro el text y me salto la variable
    footer.appendChild(p);

    ul = document.createElement('ul');
    ul.className = "list-inline";
    ul.appendChild(inline_list('Privacy', '#'));
    ul.appendChild(inline_list('Terms', '#'));
    ul.appendChild(inline_list('Support', '#'));
    footer.appendChild(ul);


    return footer;
}

// agregamos footer al final
div1.appendChild(footer());