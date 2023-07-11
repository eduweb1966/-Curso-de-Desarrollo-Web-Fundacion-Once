const getCharacters = async async => {
    // con await le decimos que hasta que no termine el fectch no siga con el siguiente paso
    const data = await fetch("http://......");
    // con awaiit le decimos que hasta que no termine de convertir los datos no siga con el siguiente paso
    const dataJSON = await data.json();
    console.log(dataJSON);
};
getCharacters();