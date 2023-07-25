import './style.css'
const COLOR_PALETTE = {
'#7A7978': 'Gray',
'#A80874': 'Fandango',
'#B7FDFE': 'Celeste',
'#480355': 'Phlocks',
'#FF8C42': 'Pumpkin'
};
Object.keys(COLOR_PALETTE).forEach((color) => {
const option = document.createElement("option");
option.value = color;
option.innerText = COLOR_PALETTE[color];
});

const colorPickerSelect = document.querySelector("#color-picker");
Object.keys(COLOR_PALETTE).forEach((color) => {
const option = document.createElement("option");
option.value = color;
option.innerText = COLOR_PALETTE[color];
colorPickerSelect.append(option);
})
  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
    colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorName.innerText = COLOR_PALETTE[newColor];
    });
    };

    addOptionsToColorPicker();

    addEventListenerToColorPicker();

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";

 