

function convert() {
    let input = document.getElementById(`input`);
    let from = document.getElementById(`from`);
    let to = document.getElementById(`to`);
    let output = 0;

    if (from.value == "dollar" && to.value == "egy") {
        output = input.value * 47 + `egy`;
    }

    else if (from.value == "egy" && to.value == "dollar") {

        output = input.value / 47 + ' $ ';
    }
    else if (from.value == "egy" && to.value == "euro") {

        output = input.value / 50 + ' euro ';
    }
    else if (from.value == "euro" && to.value == "egy") {

        output = input.value * 50 + ' egy ';
    }
    else if (from.value == "euro" && to.value == "dollar") {

        output = input.value * 1.08 + ' $ ';
    }
    else if (from.value == "dollar" && to.value == "euro") {

        output = input.value / 1.08 + ' $ ';
    }
    else if (from.value == to.value) {
        output = input.value;
    }
    document.getElementById(`output`).innerText = output;
    // console.log(input.value, from.value, to.value, output);

}
function switchfunc() {
    let from = document.getElementById(`from`);
    let to = document.getElementById(`to`);
    let x = from.value;
    from.value = to.value;
    to.value = x;
    convert();

}