const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const temperaturaAEnviar = getMarsTemperature();
    setTimeout(()=> console.log(`Mars temperature is: ${temperaturaAEnviar} degree Celsius`),5000);
}
// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo