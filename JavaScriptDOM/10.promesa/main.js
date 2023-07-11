//una funcion que recibe
const promesa = new Promise((resolve, reject) => {
    // La operación asíncrona va aquí
    if (/* operación exitosa */) {
    resolve(/* valor opcional */);
    } else {
    reject(/* error opcional */);
    }
    });
    promesa.then((valor) => {
    // La promesa se ha cumplido
    }, (error) => {
    // La promesa ha fallado
    });

